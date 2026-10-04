import { useCallback } from 'react';
import { ArrowRight } from 'lucide-react';
import { Image } from '@/components/image';
import type { LucideIcon } from 'lucide-react';

interface Badge {
  label: string;
  icon?: LucideIcon;
}

interface ThemeCardProps {
  name: string;
  description: string;
  author: string;
  image: string;
  href?: string;
  badges?: Badge[];
  /**
   * 主打变体：横向大卡（图左文右），在总览网格中占满整行；
   * 其余卡片为竖版（图上文下）两列排布。
   */
  featured?: boolean;
}

function BadgeTag({ badge }: { badge: Badge }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border border-neutral-200/80 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 bg-white/70 dark:bg-neutral-800/70">
      {badge.icon && <badge.icon className="size-3" />}
      {badge.label}
    </span>
  );
}

export function ThemeCard({
  name,
  description,
  author,
  image,
  href,
  badges,
  featured,
}: ThemeCardProps) {
  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
  }, []);

  const cardClass =
    'mx-spotlight group relative flex rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-xl hover:shadow-teal-600/10 dark:hover:shadow-teal-400/5';

  const preview = (
    <div
      className={
        featured
          ? 'relative w-full md:w-2/5 aspect-[16/10] md:aspect-auto shrink-0 overflow-hidden'
          : 'relative w-full aspect-[16/10] shrink-0 overflow-hidden'
      }
    >
      <Image
        src={image}
        alt={`${name} preview`}
        fill
        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.05]"
      />
      {featured ? (
        // 横向大卡：图片右缘渐变融入信息区
        <div
          aria-hidden
          className="absolute inset-0 hidden md:block bg-gradient-to-r from-transparent to-neutral-50 dark:to-neutral-900 [mask-image:linear-gradient(to_right,transparent_55%,#000_95%)]"
        />
      ) : (
        // 竖版卡：图片下缘轻微压暗，托住下方信息区
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-neutral-50/80 dark:from-neutral-900/80 to-transparent"
        />
      )}
    </div>
  );

  const info = (
    <div
      className={
        featured
          ? 'relative flex flex-col gap-3 p-5 md:p-6 flex-1'
          : 'relative flex flex-col gap-2.5 p-5 flex-1'
      }
    >
      <div className="flex items-center gap-2">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          {name}
        </h3>
        <ArrowRight className="size-4 text-teal-600 dark:text-teal-400 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
      </div>

      <div className="flex items-center gap-2">
        <Image
          src={`https://github.com/${author}.png`}
          alt={author}
          width={24}
          height={24}
          className="rounded-full bg-neutral-200 dark:bg-neutral-800"
          loading="lazy"
        />
        <span className="text-sm text-neutral-600 dark:text-neutral-400">
          {author}
        </span>
      </div>

      <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
        {description}
      </p>

      {badges && badges.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
          {badges.map((badge) => (
            <BadgeTag key={badge.label} badge={badge} />
          ))}
        </div>
      )}
    </div>
  );

  const content = featured ? (
    <div onMouseMove={onMouseMove} className={`${cardClass} flex-col md:flex-row`}>
      {preview}
      {info}
    </div>
  ) : (
    <div onMouseMove={onMouseMove} className={`${cardClass} flex-col`}>
      {preview}
      {info}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`block no-underline ${featured ? 'md:col-span-2' : ''}`}
      >
        {content}
      </a>
    );
  }

  return content;
}
