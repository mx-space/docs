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

interface Contributor {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
  type: string;
}

async function fetchContributors(): Promise<{
  humans: Contributor[];
  bots: Contributor[];
}> {
  const all: Record<string, Contributor> = {};

  for (const repo of repos) {
    let page = 1;
    while (true) {
      try {
        const headers: Record<string, string> = { 'User-Agent': 'mx-docs' };
        if (process.env.GITHUB_TOKEN) {
          headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
        }
        const res = await fetch(
          `https://api.github.com/repos/${repo}/contributors?per_page=100&page=${page}`,
          {
            headers,
            next: { revalidate: 86400 },
          },
        );
        if (!res.ok) break;
        const data: Contributor[] = await res.json();
        if (!data.length) break;

        for (const c of data) {
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

        if (data.length < 100) break;
        page++;
      } catch {
        break;
      }
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

  return { humans, bots };
}

export async function Contributors() {
  const { humans, bots } = await fetchContributors();

  return (
    <section className="w-full max-w-6xl mx-auto px-6 pb-16 md:pb-24">
      <h2 className="text-3xl md:text-4xl font-semibold text-center tracking-tight text-neutral-900 dark:text-neutral-50 mb-4">
        由像你一样充满热情的开发者共同创造
      </h2>
      <p className="text-center text-neutral-500 dark:text-neutral-400 mb-10">
        感谢这些为 Mix Space 开源社区做出贡献的优秀开发者
      </p>

      {/* Human contributors */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {humans.map((c) => (
          <a
            key={c.login}
            href={c.html_url}
            target="_blank"
            rel="noopener noreferrer"
            title={`${c.login} (${c.contributions} contributions)`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={c.avatar_url}
              alt={c.login}
              className="size-10 rounded-full object-cover ring-2 ring-transparent hover:ring-teal-500 transition-all hover:scale-110"
              loading="lazy"
            />
          </a>
        ))}
      </div>

      {/* Bot contributors */}
      {bots.length > 0 && (
        <div className="flex flex-col items-center gap-3">
          <p className="text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
            非人类维护者
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {bots.map((c) => (
              <a
                key={c.login}
                href={c.html_url}
                target="_blank"
                rel="noopener noreferrer"
                title={`${c.login} (${c.contributions} contributions)`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.avatar_url}
                  alt={c.login}
                  className="size-10 rounded-full object-cover ring-2 ring-transparent hover:ring-neutral-400 transition-all hover:scale-110 opacity-70 hover:opacity-100"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
