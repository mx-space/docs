#!/usr/bin/env node
/**
 * check-links.mjs — 静态产物站内链接 / 图片 / 资源检查
 *
 * 用法:
 *   node scripts/check-links.mjs [产物目录] [--json]
 *   默认: dist
 *
 * 作者: verify (T6)。只读工具，不写任何文件。
 *
 * 抽取: <a href>、<img src>、<script src>、<link href>。
 * 跳过: 外部 (http/https///)、mailto:、tel:、javascript:、data:、纯 #fragment、空值。
 * 解析: `/foo` → 根目录；`bar/baz` → 相对当前 HTML 所在目录（支持 ../）。
 *       候选顺序: 精确路径 → `.html` → `/index.html`（文件系统真值，不做服务器猜测）。
 *
 * 分类:
 *   OK           目标文件存在且不是重定向页
 *   HINT-REDIRECT 目标存在，但目标 HTML 含 meta-refresh 或 location.replace（提示，不算失败）
 *   MISSING       目标文件不存在（真 404）
 *     ├─ PREEXISTING 目标在迁移前已知死链清单内 → 记录，不阻塞
 *     └─ BLOCKING    其余缺失 → 阻塞，需人工判定是否为本次迁移引入
 *
 * 退出码: 0 = 无 BLOCKING；1 = 存在 BLOCKING 缺失；2 = 用法/目录错误。
 */

import fs from 'node:fs';
import path from 'node:path';

const argv = process.argv.slice(2);
const jsonOut = argv.includes('--json');
const positional = argv.filter((a) => !a.startsWith('--'));
const ROOT = positional[0] ?? 'dist';

/**
 * 迁移前就存在的死链（可扩展清单；非白名单，仅用于分类）。
 * 来源: content/docs 侧审计 —— meta.json 列了页面名但无对应 mdx（幽灵页面），
 * 或正文引用了不存在的路径。这些在旧 Next 站同样 404，故不计入本次迁移的回归。
 */
const KNOWN_PREEXISTING_DEAD = [
  { path: '/docs/deploy/one-script', basis: 'deploy/meta.json 幽灵项 + deploy/index.mdx:37 正文引用（全站唯一被正文引用的死链）' },
  { path: '/docs/configure/algolia', basis: 'configure/meta.json 幽灵项（无 algolia.mdx）' },
  { path: '/docs/guide', basis: 'content/docs/meta.json 的 guide 无对应目录' },
  { path: '/docs/getting-started', basis: 'getting-started/meta.json 含 index 但无 index.mdx（目录索引缺页）' },
  {
    path: '/docs/core/advanced/overview',
    basis: 'redirects.config.mjs 中 /docs/core/advanced 的重定向目标，但该页从未存在（幽灵目标）。旧站实测同锚点：docs-old/out/docs/core/advanced/index.html 的 <body> 里就有 <a href="/docs/core/advanced/overview">，而 docs-old/out/docs/core/advanced/overview 与 overview.html 均不存在 → 旧站同样 404，非本次迁移引入。',
  },
];

const SKIP_SCHEME = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i; // http:, mailto:, tel:, data:, //cdn
const REDIRECT_MARKER = /http-equiv\s*=\s*["']?refresh|location\.replace\s*\(/i;

function fail(msg, code = 2) { console.error(`[check-links] ERROR: ${msg}`); process.exit(code); }

if (!fs.existsSync(ROOT)) fail(`产物目录不存在: ${path.resolve(ROOT)}（提示：先跑构建产出 dist/）`);
if (!fs.statSync(ROOT).isDirectory()) fail('参数必须是目录');

function walkFiles(root, prefix = '') {
  const out = [];
  let entries;
  try { entries = fs.readdirSync(path.join(root, prefix), { withFileTypes: true }); } catch { return out; }
  for (const e of entries) {
    const rel = prefix ? `${prefix}/${e.name}` : e.name;
    if (e.isDirectory()) out.push(...walkFiles(root, rel));
    else if (e.isFile()) out.push(rel.replace(/\\/g, '/'));
  }
  return out;
}

function decodeEntities(s) {
  return s.replace(/&(amp|lt|gt|quot|#39|apos|#x2f|#47);/gi, (m, e) => {
    const k = e.toLowerCase();
    if (k === 'amp') return '&';
    if (k === 'lt') return '<';
    if (k === 'gt') return '>';
    if (k === 'quot') return '"';
    if (k === 'apos' || k === '#39') return "'";
    return '/';
  });
}

const ATTR = `(?:("([^"]*)")|('([^']*)')|([^\\s>]+))`;
const REF_PATTERNS = [
  { kind: 'page-link', re: new RegExp(`<a\\b[^>]*?\\bhref\\s*=\\s*${ATTR}`, 'gi') },
  { kind: 'image', re: new RegExp(`<img\\b[^>]*?\\bsrc\\s*=\\s*${ATTR}`, 'gi') },
  { kind: 'script', re: new RegExp(`<script\\b[^>]*?\\bsrc\\s*=\\s*${ATTR}`, 'gi') },
  { kind: 'asset', re: new RegExp(`<link\\b[^>]*?\\bhref\\s*=\\s*${ATTR}`, 'gi') },
];

/** 抽出所有引用 + 行号。 */
function extractRefs(html) {
  const lineStarts = [0];
  for (let i = 0; i < html.length; i++) if (html[i] === '\n') lineStarts.push(i + 1);
  const lineOf = (idx) => {
    let lo = 0, hi = lineStarts.length - 1;
    while (lo < hi) { const mid = (lo + hi + 1) >> 1; if (lineStarts[mid] <= idx) lo = mid; else hi = mid - 1; }
    return lo + 1;
  };
  const refs = [];
  for (const { kind, re } of REF_PATTERNS) {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(html))) {
      const raw = m[2] ?? m[4] ?? m[5] ?? '';
      refs.push({ kind, raw, line: lineOf(m.index) });
    }
  }
  return refs;
}

/** 站内引用 → 候选文件路径（posix，相对产物根）。返回 null 表示应跳过。 */
function candidatePaths(fromRel, raw) {
  let s = decodeEntities(raw.trim());
  if (!s) return null;
  if (SKIP_SCHEME.test(s)) return null;
  if (s.startsWith('#')) return null;
  s = s.split('#')[0].split('?')[0];
  if (!s) return null;
  let p;
  if (s.startsWith('/')) {
    p = s.slice(1);
  } else {
    p = path.posix.join(path.posix.dirname(fromRel), s);
  }
  try { p = decodeURIComponent(p); } catch { /* 保留原样 */ }
  p = path.posix.normalize(p);
  if (p.startsWith('..')) return null; // 逃出产物根，跳过
  if (p === '.' || p === './') p = '';
  const out = [];
  const push = (x) => { if (x && !out.includes(x)) out.push(x); };
  if (p === '') { push('index.html'); return out; }
  if (p.endsWith('/')) {
    push(p + 'index.html');
    push(p.slice(0, -1) + '.html');
    push(p.slice(0, -1));
    return out;
  }
  push(p);
  const last = p.split('/').pop();
  if (!last.includes('.')) { push(p + '.html'); push(p + '/index.html'); }
  return out;
}

const canonUrl = (p) => {
  let u = '/' + p.replace(/^\/+/, '');
  if (u !== '/') u = u.replace(/\/+$/, '');
  return u.replace(/\/index\.html$/i, '').replace(/\.html$/i, '') || '/';
};

// ── 扫描 ─────────────────────────────────────────────────────────────────
const allFiles = walkFiles(ROOT);
const fileSet = new Set(allFiles);
const htmlFiles = allFiles.filter((f) => /\.html$/i.test(f));

/** 预备：识别重定向页。 */
const redirectPages = new Set();
for (const rel of htmlFiles) {
  const html = fs.readFileSync(path.join(ROOT, rel), 'utf8');
  if (REDIRECT_MARKER.test(html)) redirectPages.add(rel);
}

const resolved = [];
const redirectHits = [];
const missing = [];
let totalRefs = 0;
let skippedRefs = 0;
const seenTargets = new Set();

for (const rel of htmlFiles) {
  const html = fs.readFileSync(path.join(ROOT, rel), 'utf8');
  for (const ref of extractRefs(html)) {
    totalRefs++;
    const cands = candidatePaths(rel, ref.raw);
    if (!cands) { skippedRefs++; continue; }
    const hit = cands.find((c) => fileSet.has(c));
    seenTargets.add(path.posix.normalize(cands[0]));
    const rec = { source: rel, line: ref.line, kind: ref.kind, raw: ref.raw, target: canonUrl(path.posix.normalize(cands[0])) };
    if (!hit) {
      const known = KNOWN_PREEXISTING_DEAD.find((k) => k.path === rec.target);
      missing.push({ ...rec, classification: known ? 'PREEXISTING' : 'BLOCKING', basis: known?.basis ?? null });
    } else if (redirectPages.has(hit)) {
      redirectHits.push({ ...rec, resolvedTo: hit });
    } else {
      resolved.push({ ...rec, resolvedTo: hit });
    }
  }
}

const blocking = missing.filter((m) => m.classification === 'BLOCKING');
const preexisting = missing.filter((m) => m.classification === 'PREEXISTING');
const passed = blocking.length === 0;

if (jsonOut) {
  console.log(JSON.stringify({
    root: ROOT,
    htmlFiles: htmlFiles.length,
    totalRefs, internalRefs: totalRefs - skippedRefs, skippedRefs,
    counts: {
      ok: resolved.length,
      hintRedirect: redirectHits.length,
      missingBlocking: blocking.length,
      missingPreexisting: preexisting.length,
    },
    blocking, preexistingDeadLinks: preexisting, redirectTargets: redirectHits,
    knownPreexistingList: KNOWN_PREEXISTING_DEAD,
    passed,
  }, null, 2));
  process.exit(passed ? 0 : 1);
}

const hr = (t) => console.log(`\n=== ${t} ===`);
console.log(`[check-links] 产物: ${path.resolve(ROOT)}  HTML 文件: ${htmlFiles.length}`);
console.log(`[check-links] 引用总数: ${totalRefs}（站内 ${totalRefs - skippedRefs}，跳过外部/锚点 ${skippedRefs}）`);
console.log(`[check-links] 去重目标数: ${seenTargets.size}`);
console.log(`[check-links] 命中: ${resolved.length}  OK | 指向重定向页: ${redirectHits.length}  HINT | 缺失: ${missing.length}（阻塞 ${blocking.length} / 既有 ${preexisting.length}）`);

hr(`阻塞缺失 BLOCKING (${blocking.length})  ← 非空即失败`);
blocking.forEach((m) => console.log(`  [404] ${m.source}:${m.line}  ${m.kind}  ${m.raw}   → ${m.target}`));
hr(`迁移前既有死链 PREEXISTING (${preexisting.length})  ← 记录，不阻塞`);
preexisting.forEach((m) => console.log(`  [dead] ${m.source}:${m.line}  ${m.kind}  ${m.raw}   → ${m.target}\n         依据: ${m.basis}`));
hr(`指向重定向页 HINT (${redirectHits.length})  ← 提示，不阻塞`);
redirectHits.forEach((m) => console.log(`  [redir] ${m.source}:${m.line}  ${m.kind}  ${m.raw}   → ${m.target} (= ${m.resolvedTo})`));

hr('结论');
console.log(passed
  ? `  PASS — 无阻塞断链（既有死链 ${preexisting.length} 条，见上）`
  : `  FAIL — ${blocking.length} 个阻塞断链`);

if (blocking.length) {
  console.log('\n  判定为"阻塞"的缺失不含既有死链清单；若确认某条在旧站同样 404，请在');
  console.log('  KNOWN_PREEXISTING_DEAD 中登记其依据，并附旧站证据。');
}
process.exit(passed ? 0 : 1);
