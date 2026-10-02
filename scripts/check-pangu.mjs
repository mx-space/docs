import { readFileSync, readdirSync, statSync } from 'node:fs';
import { resolve, extname, join } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');
const EXTS = new Set(['.ts', '.tsx', '.astro', '.mdx', '.md']);
const DIRS = ['src', 'content'];
const IGNORE = new Set(['node_modules', '.astro', 'dist', 'build']);

// CJK <-> alphanumeric
const RE = /([一-鿿㐀-䶿])([a-zA-Z0-9])|([a-zA-Z0-9])([一-鿿㐀-䶿])/g;

function walk(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    if (IGNORE.has(entry)) continue;
    const full = join(dir, entry);
    const s = statSync(full);
    if (s.isDirectory()) {
      files.push(...walk(full));
    } else if (EXTS.has(extname(entry))) {
      files.push(full);
    }
  }
  return files;
}

function stripInlineCode(text) {
  // Remove inline code spans: `...`
  return text.replace(/`[^`]*`/g, '');
}

function stripJsxTags(text) {
  // Remove JSX attributes: title="...", className="..."
  return text.replace(/\w+="[^"]*"/g, '').replace(/\w+='[^']*'/g, '');
}

let errors = 0;

for (const dir of DIRS) {
  const abs = join(ROOT, dir);
  try {
    for (const file of walk(abs)) {
      const content = readFileSync(file, 'utf-8');
      const lines = content.split('\n');
      let inCodeBlock = false;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmed = line.trim();

        // Toggle fenced code blocks
        if (trimmed.startsWith('```')) {
          inCodeBlock = !inCodeBlock;
          continue;
        }
        if (inCodeBlock) continue;

        // Skip imports/exports
        if (trimmed.startsWith('import ') || trimmed.startsWith('export ')) continue;
        // Skip pure code lines
        if (trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*')) continue;

        // Strip inline code and JSX attributes before checking
        let cleaned = stripJsxTags(stripInlineCode(line));

        const matches = cleaned.matchAll(RE);
        for (const m of matches) {
          const ctx = cleaned.slice(Math.max(0, m.index - 4), Math.min(cleaned.length, m.index + m[0].length + 4));
          // Skip if in URL context
          if (ctx.includes('http') || ctx.includes('./') || ctx.includes('../')) continue;

          const fileShort = file.replace(ROOT + '/', '');
          const fix = `${m[1] || m[3]} ${m[2] || m[4]}`;
          console.log(`${fileShort}:${i + 1}  ${ctx}  →  ${fix}`);
          errors++;
        }
      }
    }
  } catch {
    // directory doesn't exist
  }
}

if (errors > 0) {
  console.log(`\n${errors} spacing issue(s) found.`);
  process.exit(1);
} else {
  console.log('No spacing issues found.');
}
