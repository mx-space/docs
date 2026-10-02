#!/usr/bin/env node
/**
 * verify-migration.mjs — 迁移 URL 集合对齐检查（Next `out/` vs Astro `dist/`）
 *
 * 用法:
 *   node scripts/verify-migration.mjs [旧产物目录] [新产物目录] [--json]
 *   默认: out dist
 *
 * 作者: verify (T6)。只读工具，不写任何文件。
 *
 * ── URL 归一化规则（全部显式实现，供审计） ─────────────────────────────
 *  1. 递归收集 *.html；相对路径转成绝对 URL 路径。
 *  2. `X/index.html` → `/X`（根 `index.html` → `/`），同时 `X.html` → `/X`。
 *     两者视为同一项（Next/Astro 的 directory-format 与 file-format 对齐）。
 *  3. 末尾斜杠一律剥离（`/docs/` ≡ `/docs`），根 `/` 除外。
 *  4. 忽略 `/api/*`、`/og/*`（构建/端点产物，两侧形态不可比）。
 *  5. `/og.png` 视为"等价存在"：只要任一侧存在，就强制两侧都视为存在。
 *  6. `sitemap.xml`、`sitemap-index.xml`、`sitemap-<n>.xml`（任意扩展名大小写）全部归一化为
 *     同一 token `<sitemap>`，因此 Next 的 `sitemap.xml` 与 Astro 的 `sitemap-index.xml`
 *     被视为**等价**（DoD 4 明文要求），而不是差异项。
 *  7. 忽略 `404.html` / `_not-found.html`（两侧各自的"页面未找到"实现，形态不可比），
 *     以及 `/_astro/*`、`/_next/*` 构建资源目录。
 *  8. 非 HTML 资源差异不参与判定（`robots.txt`、`CNAME` 单独作为信息项列出）。
 *     实测于真实基线：`out/` 根有 `404.html` 与 `_not-found.html` 两份、`robots.txt` 一份，
 *     以及 53 个 `docs/**.txt` RSC 路由负载 —— 后者是不可比实现细节，仅计数展示。
 *
 * 退出码: 0 = 无"仅旧有"；1 = 存在"仅旧有"（失败信号）；2 = 用法/目录错误。
 */

import fs from 'node:fs';
import path from 'node:path';

const argv = process.argv.slice(2);
const jsonOut = argv.includes('--json');
const positional = argv.filter((a) => !a.startsWith('--'));
const OLD_DIR = positional[0] ?? 'out';
const NEW_DIR = positional[1] ?? 'dist';

// ── 归一化常量 ───────────────────────────────────────────────────────────
const IGNORE_URL_PREFIXES = ['/api', '/og', '/_astro', '/_next']; // 规则 4 + 7
const IGNORE_EXACT = new Set(['/404', '/_not-found']); // 规则 7（404.html / _not-found.html）
const OG_PNG = '/og.png'; // 规则 5
const SITEMAP_TOKEN = '<sitemap>'; // 规则 6
const SITEMAP_RE = /(^|\/)sitemap(-index|-\d+)?\.xml$/i; // 规则 6 的实际生效点（.xml 不是 .html）
const BUILD_ASSET_DIRS = ['_astro', '_next']; // 非 HTML 信息项里也忽略

/** 剥掉 query/hash，百分比解码，posix 归一化。 */
function canonPath(p) {
  let s = p.replace(/\\/g, '/');
  try { s = decodeURIComponent(s); } catch { /* 保留原样 */ }
  s = s.replace(/\/{2,}/g, '/');
  if (!s.startsWith('/')) s = '/' + s;
  return s;
}

/** 规则 2 + 3：文件相对路径 → 规范化 URL token。 */
function fileToToken(relPath) {
  let p = relPath.replace(/\\/g, '/');
  if (p === 'index.html') return '/';
  if (p.toLowerCase().endsWith('/index.html')) {
    p = p.slice(0, -'/index.html'.length) + '/'; // X/index.html → /X/
  }
  let url = canonPath('/' + p);
  if (url !== '/') {
    url = url.replace(/\/+$/, ''); // 规则 3
    url = url.replace(/\.html$/i, ''); // X.html → /X
  }
  // 规则 6：所有 sitemap*.xml 折叠为同一 token
  if (/(^|\/)sitemap(-index|-\d+)?\.xml$/i.test(url)) return SITEMAP_TOKEN;
  return url;
}

/** 该 URL token 是否可以忽略（规则 4 / 5 / 7）。 */
function isIgnoredToken(tok) {
  if (IGNORE_EXACT.has(tok)) return true;
  if (IGNORE_URL_PREFIXES.some((pre) => tok === pre || tok.startsWith(pre + '/'))) return true;
  if (BUILD_ASSET_DIRS.some((d) => tok === `/${d}` || tok.startsWith(`/${d}/`))) return true;
  return false;
}

/** 递归列出目录下所有文件（相对 posix 路径）。 */
function walkFiles(root, prefix = '') {
  const out = [];
  let entries;
  try { entries = fs.readdirSync(path.join(root, prefix), { withFileTypes: true }); } catch { return out; }
  for (const e of entries) {
    const rel = prefix ? `${prefix}/${e.name}` : e.name;
    if (e.isDirectory()) out.push(...walkFiles(root, rel));
    else if (e.isFile()) out.push(rel);
  }
  return out;
}

/** 收集一个产物目录的 URL 集合 + 非 HTML 文件清单。 */
function collect(root) {
  const files = walkFiles(root);
  const urls = new Set();
  const skipped = [];
  const nonHtml = [];
  let ogPngPresent = false;
  let cnamePresent = false;
  for (const rel of files) {
    const abs = canonPath('/' + rel);
    if (/\.html$/i.test(rel)) {
      const tok = fileToToken(rel);
      if (isIgnoredToken(tok)) { skipped.push(tok); continue; }
      urls.add(tok);
    } else if (abs === OG_PNG) {
      ogPngPresent = true; // 规则 5
    } else if (SITEMAP_RE.test(rel)) {
      urls.add(SITEMAP_TOKEN); // 规则 6：sitemap*.xml 等价，不进 nonHtml 差异
    } else {
      if (abs === '/CNAME') cnamePresent = true; // DoD 3 直接相关
      if (!BUILD_ASSET_DIRS.some((d) => rel === d || rel.startsWith(d + '/'))) {
        nonHtml.push(abs);
      }
    }
  }
  return { root, urls, skipped: [...new Set(skipped)].sort(), nonHtml: nonHtml.sort(), ogPngPresent, cnamePresent, fileCount: files.length };
}

/**
 * 把非 HTML 差异压成人能读的清单：有意义的端点逐个列出，
 * 不可比的实现细节（Next RSC 路由负载、__next 元数据、OG 图批量产物）只给计数，
 * 避免真实信号（robots.txt / CNAME / llms*）被 100+ 行噪声埋掉。
 */
const MEANINGFUL_NONHTML = /^\/(robots\.txt|CNAME|\.nojekyll|llms[\w.-]*\.txt)|\/llms\.mdx\//i;

function groupNonHtml(list) {
  const counts = new Map();
  const other = [];
  for (const f of list) {
    if (MEANINGFUL_NONHTML.test(f)) { other.push(f); continue; }
    let key = null;
    if (/\.txt$/i.test(f)) key = 'Next RSC 路由负载 (*.txt)';
    else if (/\/__next\./.test(f)) key = 'Next __next.* 元数据负载';
    else if (/^\/og\//.test(f)) key = 'OG 图批量产物 (/og/**)';
    else if (/\.(md|json)$/i.test(f)) key = '其它文本产物 (*.md/*.json)';
    if (key) counts.set(key, (counts.get(key) ?? 0) + 1);
    else other.push(f);
  }
  const lines = other.slice().sort();
  for (const [k, n] of [...counts.entries()].sort()) lines.push(`<${n} 个：${k}（不可比实现细节，仅计数）>`);
  return lines;
}

function fail(msg, code = 2) { console.error(`[verify-migration] ERROR: ${msg}`); process.exit(code); }

if (!fs.existsSync(OLD_DIR)) fail(`旧产物目录不存在: ${path.resolve(OLD_DIR)}（提示：旧站未构建时可用等价基线目录替代）`);
if (!fs.existsSync(NEW_DIR)) fail(`新产物目录不存在: ${path.resolve(NEW_DIR)}（提示：先跑构建产出 dist/）`);
if (!fs.statSync(OLD_DIR).isDirectory() || !fs.statSync(NEW_DIR).isDirectory()) fail('参数必须是目录');

const oldSide = collect(OLD_DIR);
const newSide = collect(NEW_DIR);

// 规则 5：/og.png 等价存在
if (oldSide.ogPngPresent || newSide.ogPngPresent) {
  oldSide.urls.add(OG_PNG);
  newSide.urls.add(OG_PNG);
}

const onlyOld = [...oldSide.urls].filter((u) => !newSide.urls.has(u)).sort();
const onlyNew = [...newSide.urls].filter((u) => !oldSide.urls.has(u)).sort();
const shared = [...oldSide.urls].filter((u) => newSide.urls.has(u)).sort();

// 非 HTML 差异（信息项，不参与退出码）
const nonHtmlOnlyOld = oldSide.nonHtml.filter((f) => !newSide.nonHtml.includes(f));
const nonHtmlOnlyNew = newSide.nonHtml.filter((f) => !oldSide.nonHtml.includes(f));
const robotsOld = oldSide.nonHtml.includes('/robots.txt');
const robotsNew = newSide.nonHtml.includes('/robots.txt');

if (jsonOut) {
  console.log(JSON.stringify({
    oldDir: OLD_DIR, newDir: NEW_DIR,
    counts: { onlyOld: onlyOld.length, onlyNew: onlyNew.length, shared: shared.length },
    onlyOld, onlyNew, shared,
    ignoredOld: oldSide.skipped, ignoredNew: newSide.skipped,
    nonHtmlOnlyOld, nonHtmlOnlyNew,
    robots: { old: robotsOld, new: robotsNew },
    cname: { old: oldSide.cnamePresent, new: newSide.cnamePresent },
    passed: onlyOld.length === 0,
  }, null, 2));
  process.exit(onlyOld.length === 0 ? 0 : 1);
}

const hr = (t) => console.log(`\n=== ${t} ===`);
console.log(`[verify-migration] 旧: ${path.resolve(OLD_DIR)} (${oldSide.fileCount} 文件, ${oldSide.urls.size} URL)`);
console.log(`[verify-migration] 新: ${path.resolve(NEW_DIR)} (${newSide.fileCount} 文件, ${newSide.urls.size} URL)`);

hr(`仅旧有 (${onlyOld.length})  ← 非空即失败`);
onlyOld.forEach((u) => console.log('  - ' + u));
hr(`仅新有 (${onlyNew.length})  ← 允许，但需人工确认是否为预期新增`);
onlyNew.forEach((u) => console.log('  + ' + u));
hr(`共有 (${shared.length})`);
shared.forEach((u) => console.log('  = ' + u));

hr('归一化忽略项（已排除）');
console.log(`  旧: ${oldSide.skipped.join(', ') || '(无)'}`);
console.log(`  新: ${newSide.skipped.join(', ') || '(无)'}`);

hr('非 HTML 产物差异（信息项，不参与退出码）');
console.log(`  仅旧有: ${groupNonHtml(nonHtmlOnlyOld).join(', ') || '(无)'}`);
console.log(`  仅新有: ${groupNonHtml(nonHtmlOnlyNew).join(', ') || '(无)'}`);
console.log(`  robots.txt: 旧=${robotsOld ? '存在' : '缺失'}, 新=${robotsNew ? '存在' : '缺失'}`);
console.log(`  CNAME (DoD 3): 旧=${oldSide.cnamePresent ? '存在' : '缺失'}, 新=${newSide.cnamePresent ? '存在' : '缺失'}`);

hr('结论');
if (onlyOld.length === 0) {
  console.log(`  PASS — URL 集合对齐（仅新有 ${onlyNew.length} 项，已列出）`);
} else {
  console.log(`  FAIL — 有 ${onlyOld.length} 个旧站 URL 在新产物中缺失:`);
  onlyOld.forEach((u) => console.log('    * ' + u));
}
process.exit(onlyOld.length === 0 ? 0 : 1);
