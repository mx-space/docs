import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import {
  Rocket,
  Server,
  Settings,
  PaintRoller,
  BookOpenCheck,
  ArrowLeftRight,
  BookOpen,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  '新手入门': <Rocket className="size-4" />,
  '部署': <Server className="size-4" />,
  '配置': <Settings className="size-4" />,
  '前端主题': <PaintRoller className="size-4" />,
  '使用': <BookOpenCheck className="size-4" />,
  '迁移': <ArrowLeftRight className="size-4" />,
  '参考手册': <BookOpen className="size-4" />,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      {...baseOptions()}
      tabs={{
        transform: (option) => ({
          ...option,
          icon: iconMap[option.title as string] ?? option.icon,
        }),
      }}
    >
      {children}
    </DocsLayout>
  );
}
