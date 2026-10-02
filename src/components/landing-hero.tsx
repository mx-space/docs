import { useCallback, useRef, useState } from 'react';
import { Image } from '@/components/image';
import type { ResponsiveImage } from '@/lib/images';

/**
 * 首页 hero：氛围光背景（辉光 + 点阵 + 噪点）+ 展示级标题。
 * 指针追光通过在 section 上写 CSS 变量实现，纯展示层行为：
 * SSR 输出与首帧一致（追光层默认透明），水合后才出现。
 */
export function LandingHero({ logo }: { logo: ResponsiveImage }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [glowOn, setGlowOn] = useState(false);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--px', `${e.clientX - rect.left}px`);
    el.style.setProperty('--py', `${e.clientY - rect.top}px`);
    setGlowOn(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      onPointerMove={onPointerMove}
      className="relative w-full overflow-hidden flex flex-col items-center px-6 pt-16 md:pt-24 pb-10 md:pb-14"
    >
      {/* 背景层：辉光 + 点阵 + 噪点 + 指针追光 */}
      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-[560px] from-teal-500/20 dark:from-teal-400/12 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,var(--tw-gradient-from)_0%,transparent_70%)]" />
        <div className="mx-dots absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_20%,transparent_75%)] [--dots-color:oklch(0.55_0.05_190/0.3)] dark:[--dots-color:oklch(0.75_0.05_190/0.16)]" />
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            opacity: glowOn ? 1 : 0,
            background:
              'radial-gradient(480px circle at var(--px, 50%) var(--py, 30%), oklch(0.75 0.1 190 / 0.09), transparent 70%)',
          }}
        />
        <div className="mx-noise absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" />
        {/* 底部向页面底色过渡，避免与下一个 section 生硬分界 */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-neutral-50 dark:to-neutral-950" />
      </div>

      {/* 品牌 logo */}
      <div
        data-stagger
        style={{ '--stagger': '0ms' } as React.CSSProperties}
        className="flex items-center"
      >
        <Image
          src={logo.src}
          srcSet={logo.srcSet}
          sizes={logo.sizes}
          alt="Mix Space"
          width={logo.width}
          height={logo.height}
          className="h-auto w-40 md:w-52 shrink-0"
          priority
        />
      </div>

      <span
        data-stagger
        style={{ '--stagger': '90ms' } as React.CSSProperties}
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-neutral-200/80 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur px-3.5 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-300"
      >
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-teal-500 opacity-60" />
          <span className="relative inline-flex size-1.5 rounded-full bg-teal-600 dark:bg-teal-400" />
        </span>
        开源免费 · 前后端分离 · 内置 AI
      </span>

      <h1
        data-stagger
        style={{ '--stagger': '180ms' } as React.CSSProperties}
        className="mt-6 text-center text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-balance text-neutral-900 dark:text-neutral-50 leading-[1.08]"
      >
        为热爱写作的你
        <br />
        构建
        <span className="bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-500 dark:from-teal-300 dark:via-teal-200 dark:to-cyan-300 bg-clip-text text-transparent">
          自己的个人空间
        </span>
      </h1>

      <p
        data-stagger
        style={{ '--stagger': '270ms' } as React.CSSProperties}
        className="mt-6 max-w-xl text-center text-base md:text-lg leading-relaxed text-pretty text-neutral-600 dark:text-neutral-400"
      >
        Mix Space 是一个开源的内容管理系统：博文、手记、思考多形态记录，
        AI 摘要与翻译开箱即用，部署在你自己的服务器上。
      </p>

      <div
        data-stagger
        style={{ '--stagger': '360ms' } as React.CSSProperties}
        className="mt-8 flex flex-wrap items-center justify-center gap-3"
      >
        <a
          href="/docs"
          className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 dark:bg-white px-6 py-3 text-sm font-medium text-white dark:text-neutral-900 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-neutral-900/15 dark:hover:shadow-teal-400/10 active:translate-y-0 active:scale-[0.98]"
        >
          查看文档
          <svg
            width="15"
            height="15"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform group-hover:translate-x-0.5"
          >
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </a>
        <a
          href="https://github.com/mx-space"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/60 dark:bg-neutral-900/60 backdrop-blur px-6 py-3 text-sm font-medium text-neutral-800 dark:text-neutral-200 transition-all hover:-translate-y-0.5 hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-white dark:hover:bg-neutral-900 active:translate-y-0 active:scale-[0.98]"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-4.5">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          GitHub
        </a>
      </div>
    </section>
  );
}

