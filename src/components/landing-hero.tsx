import Image from 'next/image';
import Link from 'next/link';

export function LandingHero() {
  return (
    <section className="flex flex-col items-center gap-8 max-w-5xl mx-auto px-3 py-16 md:py-24 flex-1">
      {/* Icon + Image row */}
      <div className="flex items-center gap-4">
        <YarnBall />
        <Image
          src="/images/uwu.png"
          alt="Mix Space"
          width={320}
          height={80}
          className="h-auto w-48 md:w-64 shrink-0"
          priority
        />
      </div>

      {/* Text & CTA */}
      <div className="flex flex-col gap-6 items-center text-center max-w-xl">
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
            为个人博客、创作者主页打造的 AI 驱动型内容管理系统
          </p>
          <div className="flex items-center gap-3 justify-center">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium transition-colors hover:bg-neutral-700 dark:hover:bg-neutral-200"
            >
              查看文档
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
            <a
              href="https://github.com/mx-space"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-300 dark:border-neutral-600 text-neutral-800 dark:text-neutral-200 font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
    </section>
  );
}

function YarnBall() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-40 h-40 md:w-52 md:h-52"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Platform / base */}
      <ellipse cx="100" cy="160" rx="70" ry="12" fill="#d4d4d4" />

      {/* Yarn ball */}
      <circle cx="100" cy="100" r="60" fill="#3a3a3a" />

      {/* Yarn strands wrapping the ball */}
      <path
        d="M55 80 Q80 60 120 70 Q150 78 145 100"
        stroke="#8a8a8a"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M60 120 Q90 100 130 110 Q155 118 140 135"
        stroke="#8a8a8a"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M75 65 Q100 80 110 60 Q120 45 135 55"
        stroke="#8a8a8a"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M50 105 Q70 95 95 105 Q115 112 100 130"
        stroke="#9a9a9a"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />

      {/* Loose yarn end on the platform */}
      <path
        d="M140 155 Q155 148 165 155 Q172 162 160 165 Q150 168 155 160"
        stroke="#3a3a3a"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />

      {/* Highlight / shine */}
      <ellipse cx="82" cy="78" rx="18" ry="10" fill="white" opacity="0.08" />
    </svg>
  );
}
