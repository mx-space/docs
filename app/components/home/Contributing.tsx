import Link from 'next/link';
import ContributorCounter from '@/app/components/contributor-count';
import { FaGithub } from "react-icons/fa";
import { cn } from '@/utils/cn';
import { buttonVariants } from '@/app/components/ui/button';
import { FaHeart } from "react-icons/fa";

export function Contributing() {
    return (
      <div className="flex flex-col items-center border-x border-t px-4 py-16 text-center">
        <FaHeart className="mb-4 text-primary animate-pulse" />
        <h2 className="mb-4 text-xl font-semibold sm:text-2xl">
          由像你一样充满热情的开发者共同创造
        </h2>
        <p className="mb-8 text-muted-foreground">
          Some of our best contributors.
        </p>
        <Link
          href="https://github.com/mx-space"
          className={cn(buttonVariants({ 
            variant: 'outline',
            className: 'mb-8 group transition-all duration-300 hover:scale-105'
          }))}
        >
          <FaGithub className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-105" /> 加入开源社区
        </Link>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          <ContributorCounter 
            repos={[
              { owner: 'mx-space', name: 'docs-v2-legacy' },
              { owner: 'mx-space', name: 'docs' },
              { owner: 'mx-space', name: 'docs-archived' },
              { owner: 'mx-space', name: 'netease-blil-api' },
              { owner: 'mx-space', name: 'ProcessReporterMac' },
              { owner: 'mx-space', name: 'core' },
              { owner: 'mx-space', name: 'mx-web-yun' },
              { owner: 'mx-space', name: 'kami' },
              { owner: 'Innei', name: 'Shiro' }
            ]}
            excludeUsers={[
              'dependabot[bot]', 
              'renovate[bot]',
              'renovate-bot',
              'code-factor'
            ]}
            className="w-full"
          />
        </div>
      </div>
    );
  }

