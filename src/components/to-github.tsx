export function ToGithubGroup({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">{children}</div>
  );
}

export function ToGithub({
  repo,
  description,
}: {
  repo: string;
  description?: string;
}) {
  const [owner, repoName] = repo.split('/');

  return (
    <a
      href={`https://github.com/${repo}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-lg border border-fd-border bg-fd-card px-3 py-0.5 transition-all hover:border-fd-primary/40 hover:shadow-md hover:shadow-fd-primary/5 no-underline"
    >
      <img
        src={`https://github.com/${owner}.png`}
        alt={owner}
        className="size-8 shrink-0 rounded-full object-cover ring-2 ring-fd-border transition-all group-hover:ring-fd-primary/40"
        loading="lazy"
      />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-fd-foreground">
          <span className="text-fd-muted-foreground transition-colors group-hover:text-fd-primary">
            {owner}
          </span>
          <span className="mx-1 text-fd-muted-foreground/50">/</span>
          <span>{repoName}</span>
        </p>
        {description && (
          <p className="mt-px truncate text-xs text-fd-muted-foreground">
            {description}
          </p>
        )}
      </div>
      <svg
        className="size-4 shrink-0 text-fd-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-fd-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  );
}
