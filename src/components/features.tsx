import { useCallback } from 'react';
import {
  ArrowLeftRight,
  Blocks,
  Bot,
  Cpu,
  FileEdit,
  Palette,
  Settings,
} from 'lucide-react';

const p = 'text-sm leading-relaxed text-neutral-600 dark:text-neutral-400';

type Icon = React.ComponentType<{ className?: string }>;

/**
 * 首页功能区：bento 非对称网格（lg 下 6 列，宽窄交替强调）。
 * 每张卡片：指针聚光边框 + 角部环境光斑 + 幽灵图标水印 + 悬停上浮，
 * 图标为品牌色渐变发光块。
 */
export function Features() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 pb-14 md:pb-20">
      <header className="max-w-2xl mb-8 md:mb-10" data-reveal>
        <p className="text-sm font-medium text-teal-600 dark:text-teal-400 tracking-wide">
          功能
        </p>
        <h2 className="mt-1.5 text-3xl md:text-4xl font-semibold tracking-tight text-balance text-neutral-900 dark:text-neutral-50">
          个人站点需要的功能，这里都有
        </h2>
        <p className={`mt-2.5 ${p}`}>
          内容管理、主题外观、AI 能力和部署运维开箱即用，不用自己拼装一堆工具。
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
        <SpotlightCard className="lg:col-span-4" watermark={Blocks}>
          <CardHeader icon={Blocks} title="现代化技术栈" />
          <p className={p}>
            后端使用 NestJS，官方主题基于 Next.js，数据存在 PostgreSQL，缓存走
            Redis，都是主流且能长期维护的技术。
          </p>
          <div className="mt-auto pt-3 flex flex-wrap gap-1.5">
            {['NestJS', 'Next.js', 'PostgreSQL', 'Redis', 'TypeScript'].map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 px-2 py-0.5 font-mono text-xs text-neutral-600 dark:text-neutral-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </SpotlightCard>

        <SpotlightCard className="lg:col-span-2" watermark={ArrowLeftRight}>
          <CardHeader icon={ArrowLeftRight} title="前后端分离" />
          <p className={p}>后端 API 和前端界面分开部署，可以各自升级、各自扩容。</p>
        </SpotlightCard>

        <SpotlightCard className="lg:col-span-2" watermark={Palette}>
          <CardHeader icon={Palette} title="现代化 UI" />
          <p className={p}>
            提供 Yohaku、Shiro 等官方主题，界面简洁现代，支持深色模式。
          </p>
        </SpotlightCard>

        <SpotlightCard className="lg:col-span-4" watermark={FileEdit}>
          <CardHeader icon={FileEdit} title="混合编辑器" />
          <p className={p}>
            同一个编辑器里既能用富文本也能写
            Markdown，支持所见即所得、图床上传和附加数据编辑。
          </p>
        </SpotlightCard>

        <SpotlightCard className="lg:col-span-3" watermark={Settings}>
          <CardHeader icon={Settings} title="云函数与配置" />
          <p className={p}>
            通过云函数对接第三方 API（如状态上报），前端设置用 JSON/YAML
            编辑器直接修改，不用改主题代码。
          </p>
        </SpotlightCard>

        <SpotlightCard className="lg:col-span-3" watermark={Cpu}>
          <CardHeader icon={Cpu} title="AI 集成" />
          <p className={p}>
            可配置多个 AI 提供商，用来生成文章摘要、精读、翻译和审核评论，任务由队列统一调度。
          </p>
          <div className="mt-auto pt-3 flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
            <Bot className="size-3.5" />
            支持 OpenAI、DeepSeek 或自建网关
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}

function SpotlightCard({
  className,
  watermark: Watermark,
  children,
}: {
  className?: string;
  watermark?: Icon;
  children: React.ReactNode;
}) {
  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
  }, []);

  return (
    <div
      onMouseMove={onMouseMove}
      className={`mx-spotlight group relative overflow-hidden flex flex-col gap-2 p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-xl hover:shadow-teal-600/10 dark:hover:shadow-teal-400/5 ${className ?? ''}`}
    >
      {/* 角部环境光斑（悬停时增强） */}
      <div
        aria-hidden
        className="absolute -top-16 -right-16 size-44 rounded-full bg-gradient-to-br from-teal-400/15 to-cyan-300/10 blur-2xl transition-opacity duration-300 opacity-70 group-hover:opacity-100 dark:from-teal-400/10 dark:to-cyan-300/5"
      />
      {/* 幽灵图标水印 */}
      {Watermark && (
        <Watermark
          aria-hidden
          className="absolute -bottom-5 -right-4 size-28 rotate-6 text-neutral-900/[0.045] dark:text-white/[0.035] pointer-events-none"
        />
      )}

      <div className="relative flex flex-col gap-3">{children}</div>
    </div>
  );
}

/** 品牌色渐变发光图标 + 标题同行，跨卡片基线对齐 */
function CardHeader({ icon: Icon, title }: { icon: Icon; title: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex items-center justify-center size-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 shadow-md shadow-teal-500/25 dark:shadow-teal-400/20 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
        <Icon className="size-4 text-white" />
      </div>
      <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
        {title}
      </h3>
    </div>
  );
}
