import type { ReactNode } from 'react';
import type { Root } from 'fumadocs-core/page-tree';
// `TOCItemType` is NOT re-exported from `fumadocs-core/page-tree`; it lives in `fumadocs-core/toc`.
import type { TOCItemType } from 'fumadocs-core/toc';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
// NOTE: in fumadocs-ui 16.15.18 `MarkdownCopyButton` and `ViewOptionsPopover` are
// re-exported only from `layouts/docs/page` (there is no `components/markdown-copy-button`
// or `components/view-options-popover` entry in the package's exports map).
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  MarkdownCopyButton,
  ViewOptionsPopover,
} from 'fumadocs-ui/layouts/docs/page';
import {
  Compass,
  Server,
  Settings,
  PaintRoller,
  BookOpenCheck,
  ArrowLeftRight,
  BookOpen,
} from 'lucide-react';
import { baseOptions } from '@/lib/layout.shared';
import { RootProvider } from '@/components/root-provider';

const iconMap: Record<string, ReactNode> = {
  '新手入门': <Compass className="size-4" />,
  '部署': <Server className="size-4" />,
  '配置': <Settings className="size-4" />,
  '前端主题': <PaintRoller className="size-4" />,
  '使用': <BookOpenCheck className="size-4" />,
  '迁移': <ArrowLeftRight className="size-4" />,
  '参考手册': <BookOpen className="size-4" />,
};

export default function Docs({
  tree,
  pathname,
  params,
  toc,
  full,
  title,
  description,
  markdownUrl,
  githubUrl,
  children,
}: {
  tree: Root;
  pathname: string;
  params: Record<string, string | string[] | undefined>;
  toc: TOCItemType[];
  full?: boolean;
  title: string;
  description?: string;
  markdownUrl: string;
  githubUrl: string;
  children: ReactNode;
}): React.ReactElement {
  return (
    <RootProvider pathname={pathname} params={params}>
      <DocsLayout
        tree={tree}
        {...baseOptions()}
        tabs={{
          transform: (option) => ({
            ...option,
            icon: iconMap[option.title as string] ?? option.icon,
          }),
        }}
      >
        <DocsPage toc={toc} full={full}>
          <DocsTitle>{title}</DocsTitle>
          <DocsDescription className="mb-0">{description}</DocsDescription>
          <div className="flex flex-row gap-2 items-center border-b pb-6">
            <MarkdownCopyButton markdownUrl={markdownUrl} />
            <ViewOptionsPopover
              markdownUrl={markdownUrl}
              githubUrl={githubUrl}
            />
          </div>
          <DocsBody>{children}</DocsBody>
        </DocsPage>
      </DocsLayout>
    </RootProvider>
  );
}
