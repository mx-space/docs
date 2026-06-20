import {
  ArrowLeftRight,
  Blocks,
  Cpu,
  FileEdit,
  Settings,
  Sparkles,
} from 'lucide-react';

const features = [
  {
    icon: Blocks,
    title: '基于 Next.js',
    description:
      '内置代码分割和图片优化，服务器端渲染（SSR）支持，性能强劲，速度快，SEO 友好。',
  },
  {
    icon: ArrowLeftRight,
    title: '前后端分离',
    description:
      '采用前后端分离架构，后端 API 与前端 UI 独立部署，灵活适应不同的部署环境和需求。',
  },
  {
    icon: Sparkles,
    title: '现代化 UI',
    description:
      '前后端用户界面设计现代化，Yohaku/Shiro 轻面板集成，简洁而不简单，让你的体验更加流畅。',
  },
  {
    icon: FileEdit,
    title: '混合编辑器',
    description:
      '编辑器同时支持富文本（Rich）编辑器和 Markdown 语法，所见即所得、图床上传集成、附加数据编辑器等，让你的编辑体验更顺畅。',
  },
  {
    icon: Settings,
    title: '代码片段',
    description:
      '无限扩展，无限可能。通过云函数配置实现状态上报等第三方 API 集成功能，通过 JSON/YAML 编辑器快速编辑前端设置。',
  },
  {
    icon: Cpu,
    title: 'AI 集成',
    description:
      '内置 AI 模块，可配置多个 AI 提供商，可进行文章摘要、文章精读、多语言翻译、评论审核等功能，并通过任务队列管理。',
  },
];

export function Features() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 pb-16 md:pb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-3 p-6 rounded-2xl border bg-neutral-50 dark:bg-neutral-900 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-10 rounded-xl bg-neutral-900 dark:bg-white">
                <item.icon className="size-5 text-white dark:text-neutral-900" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                {item.title}
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
