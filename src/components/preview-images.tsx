import { useEffect, useRef, useState } from 'react';
import { Image } from '@/components/image';
import { cn } from '@/lib/cn';

const previews = [
  { name: '余白/Yohaku', image: '/screenshot/Yohaku.png' },
  { name: '白/Shiro', image: '/screenshot/Shiro.png' },
  { name: '控制面板/Dashboard', image: '/screenshot/Dashboard.png' },
];

export function PreviewImages() {
  const [active, setActive] = useState(0);
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  // Auto-rotate every 4s
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % previews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
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

  return (
    <section className="relative w-full max-w-6xl mx-auto px-6 pb-16 md:pb-24">
      <div className="relative overflow-hidden rounded-2xl border bg-neutral-50 dark:bg-neutral-900 shadow-2xl shadow-neutral-200/50 dark:shadow-neutral-900/50">
        {/* Fixed aspect ratio preview area */}
        <div className="relative w-full aspect-[16/10]">
          {previews.map((item, i) => (
            <div
              key={i}
              className={cn(
                'absolute inset-0 transition-all duration-700',
                i === active
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6',
              )}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* Tab bar - no bottom padding */}
        <div className="relative flex justify-center -mt-6 pb-4 z-10">
          <div className="relative flex items-center gap-0.5 p-1 rounded-full bg-white dark:bg-neutral-800 border shadow-lg">
            <div
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
                onClick={() => setActive(i)}
                className={cn(
                  'relative z-10 h-8 px-5 text-sm font-medium rounded-full transition-colors',
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
