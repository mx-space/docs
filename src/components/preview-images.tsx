import { useCallback, useEffect, useRef, useState } from 'react';
import { Image } from '@/components/image';
import type { ResponsiveImage } from '@/lib/images';
import { cn } from '@/lib/cn';

interface PreviewItem extends ResponsiveImage {
  name: string;
}

export function PreviewImages({ previews }: { previews: PreviewItem[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tablistRef = useRef<HTMLDivElement | null>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  // Auto-rotate every 4s；reduced-motion 用户不自动播放，悬停时暂停
  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % previews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [paused, reducedMotion, previews.length]);

  // prefers-reduced-motion：响应式监听系统设置变化
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReducedMotion(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // 指示条位置以 tab 相对容器的偏移计算，切换或尺寸变化时重算
  const updateIndicator = useCallback(() => {
    const btn = btnRefs.current[active];
    if (!btn) return;
    const parent = btn.parentElement;
    if (!parent) return;
    const parentRect = parent.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    setIndicator({
      left: btnRect.left - parentRect.left,
      width: btnRect.width,
    });
  }, [active]);

  useEffect(() => {
    updateIndicator();
  }, [updateIndicator]);

  // 容器尺寸变化（窗口 resize、字体加载等）时重算指示条位置
  useEffect(() => {
    const el = tablistRef.current;
    if (!el) return;
    const ro = new ResizeObserver(updateIndicator);
    ro.observe(el);
    return () => ro.disconnect();
  }, [updateIndicator]);

  return (
    <section
      className="relative w-full max-w-6xl mx-auto px-6 pb-14 md:pb-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* 环境辉光：品牌色弥散阴影；内收一圈，避免模糊溢出到卡片外被误认为图片漏底 */}
      <div
        aria-hidden
        className="absolute inset-x-10 top-10 bottom-24 -z-10 rounded-[2.5rem] bg-gradient-to-r from-teal-500/25 via-cyan-400/15 to-teal-500/25 blur-3xl dark:from-teal-400/15 dark:via-cyan-300/8 dark:to-teal-400/15"
      />
      <div className="relative overflow-hidden rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 shadow-2xl shadow-teal-900/10 dark:shadow-black/40">
        {/* 窗口 chrome */}
        <div className="flex items-center gap-1.5 border-b border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-4 py-2">
          <span className="size-2.5 rounded-full bg-red-400/80" />
          <span className="size-2.5 rounded-full bg-amber-400/80" />
          <span className="size-2.5 rounded-full bg-green-400/80" />
        </div>

        {/* Fixed aspect ratio preview area */}
        <div className="relative w-full aspect-[16/10]">
          {previews.map((item, i) => (
            <div
              key={i}
              role="tabpanel"
              id={`preview-panel-${i}`}
              aria-labelledby={`preview-tab-${i}`}
              aria-hidden={i !== active}
              className={cn(
                'absolute inset-0 transition-all duration-700',
                i === active
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-[1.03]',
              )}
            >
              <Image
                src={item.src}
                srcSet={item.srcSet}
                sizes={item.sizes}
                alt={item.name}
                fill
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* Tab bar：悬浮在图片上（绝对定位），图片一直铺到卡片底缘，不在下方留背景条 */}
        <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center px-3">
          <div
            ref={tablistRef}
            role="tablist"
            aria-label="预览图切换"
            className="relative flex items-center gap-0.5 p-1 rounded-full bg-white dark:bg-neutral-800 border shadow-lg max-w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div
              aria-hidden
              className="absolute top-1 h-8 rounded-full bg-teal-700 transition-all duration-300 ease-out"
              style={{
                left: indicator.left,
                width: indicator.width,
              }}
            />
            {previews.map((item, i) => (
              <button
                key={i}
                ref={(el) => { btnRefs.current[i] = el; }}
                role="tab"
                id={`preview-tab-${i}`}
                aria-selected={active === i}
                aria-controls={`preview-panel-${i}`}
                onClick={() => setActive(i)}
                className={cn(
                  'relative z-10 h-8 px-3 sm:px-5 text-[13px] sm:text-sm font-medium rounded-full transition-colors whitespace-nowrap',
                  active === i
                    ? 'text-white'
                    : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200',
                )}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
