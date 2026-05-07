import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');
const OUT_FILE = resolve(ROOT, 'src/components/contributors.json');

const repos = [
  'mx-space/core',
  'mx-space/mx-admin',
  'mx-space/kami',
  'mx-space/docs',
  'Innei/Shiro',
];

const botLogins = new Set([
  'renovate[bot]',
  'renovate-bot',
  'dependabot-preview[bot]',
  'dependabot[bot]',
  'mend-bolt-for-github[bot]',
  'claude',
]);

const headers = { 'User-Agent': 'mx-docs' };
if (process.env.GITHUB_TOKEN) {
  headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
}

async function fetchRepoContributors(repo) {
  const contributors = [];
  let page = 1;

  while (true) {
    const res = await fetch(
      `https://api.github.com/repos/${repo}/contributors?per_page=100&page=${page}`,
      { headers },
    );

    if (!res.ok) {
      console.error(
        `  ${repo}: HTTP ${res.status} on page ${page}, stopping.`,
      );
      break;
    }

    const data = await res.json();
    if (!data.length) break;

    contributors.push(...data);

    if (data.length < 100) break;
    page++;
  }

  console.log(`  ${repo}: ${contributors.length} contributors`);
  return contributors;
}

async function main() {
  console.log('Fetching contributors from GitHub...\n');

  const results = await Promise.all(repos.map(fetchRepoContributors));

  const all = {};
  for (const contributors of results) {
    for (const c of contributors) {
      if (!all[c.login]) {
        all[c.login] = {
          login: c.login,
          avatar_url: c.avatar_url,
          html_url: c.html_url,
          contributions: 0,
          type: c.type ?? 'User',
        };
      }
      all[c.login].contributions += c.contributions;
    }
  }

  const sorted = Object.values(all).sort(
    (a, b) => b.contributions - a.contributions,
  );

  const humans = sorted.filter(
    (c) => !botLogins.has(c.login) && !c.login.includes('[bot]'),
  );
  const bots = sorted.filter(
    (c) => botLogins.has(c.login) || c.login.includes('[bot]'),
  );

  writeFileSync(OUT_FILE, JSON.stringify({ humans, bots }, null, 2) + '\n');

  console.log(
    `\nWrote ${humans.length} humans and ${bots.length} bots to contributors.json`,
  );
}

main().catch((err) => {
  console.error('Failed to fetch contributors:', err);
  process.exit(1);
});
