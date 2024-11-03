import type { HTMLAttributes } from 'react';
import Image from 'next/image';
import { cn } from '@/utils/cn';
import { fetchContributors } from '@/utils/get-contributors';

export interface ContributorCounterProps
  extends HTMLAttributes<HTMLDivElement> {
  repoOwner: string;
  repoName: string;
  displayCount?: number;
}

export default async function ContributorCounter({
  repoOwner,
  repoName,
  displayCount = 20,
  ...props
}: ContributorCounterProps): Promise<React.ReactElement> {
  const contributors = await fetchContributors(repoOwner, repoName);
  const topContributors = contributors
    .filter((contributor) => contributor.login !== repoOwner)
    .slice(0, displayCount);

  return (
    <div {...props}>
      <div className="flex flex-wrap justify-center gap-2">
        {topContributors.map((contributor, i) => (
          <a
            key={contributor.login}
            href={`https://github.com/${contributor.login}`}
            rel="noreferrer noopener"
            target="_blank"
            className="group relative block"
          >
            <div className="absolute -inset-0.5 animate-tilt rounded-full bg-gradient-to-r from-primary to-secondary opacity-0 blur transition duration-300 group-hover:opacity-100" />
            <div className="relative size-12 overflow-hidden rounded-full border-2 border-background bg-background transition duration-300 group-hover:scale-110">
              <Image
                src={contributor.avatar_url}
                alt={`${contributor.login}'s avatar`}
                className="size-full object-cover"
                width={48}
                height={48}
                unoptimized
              />
            </div>
          </a>
        ))}
        {displayCount < contributors.length && (
          <div className="flex size-12 items-center justify-center rounded-full border-2 border-muted bg-muted font-medium">
            +{contributors.length - displayCount}
          </div>
        )}
      </div>
      <div className="mt-4 text-center text-sm text-muted-foreground">
        感谢这些优秀的贡献者
      </div>
    </div>
  );
}