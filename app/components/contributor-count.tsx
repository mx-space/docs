import type { HTMLAttributes } from 'react';
import Image from 'next/image';
import { fetchContributors } from '@/utils/get-contributors';

export interface ContributorCounterProps
  extends HTMLAttributes<HTMLDivElement> {
  repos: Array<{
    owner: string;
    name: string;
  }>;
  displayCount?: number;
  excludeUsers?: string[];
}

export default async function ContributorCounter({
  repos,
  displayCount = 20,
  excludeUsers = [],
  ...props
}: ContributorCounterProps): Promise<React.ReactElement> {
  
  const contributorsPromises = repos.map(repo => 
    fetchContributors(repo.owner, repo.name)
  );
  
  const allContributorsList = await Promise.all(contributorsPromises);
  
  
  const mergedContributors = new Map<string, {
    login: string;
    avatar_url: string;
    contributions: number;
  }>();
  
  allContributorsList.flat().forEach(contributor => {
    if (excludeUsers.includes(contributor.login)) {
      return;
    }
    
    if(mergedContributors.has(contributor.login)) {
      const existing = mergedContributors.get(contributor.login)!;
      existing.contributions += contributor.contributions;
    } else {
      mergedContributors.set(contributor.login, contributor);
    }
  });

  const sortedContributors = Array.from(mergedContributors.values())
    .sort((a, b) => b.contributions - a.contributions);

  return (
    <div {...props}>
      <div className="flex flex-wrap justify-center gap-2">
        {sortedContributors.map((contributor) => (
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
      </div>
      <div className="mt-4 text-center text-sm text-muted-foreground">
        感谢这些为 Mix Space 开源社区做出贡献的优秀开发者
      </div>
    </div>
  );
}