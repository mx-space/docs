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
}

function BadgeTag({ badge }: { badge: Badge }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800">
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
}: ThemeCardProps) {
  const content = (
    <div className="group flex flex-col md:flex-row rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 overflow-hidden hover:shadow-lg transition-shadow">
      {/* Preview image */}
      <div className="relative w-full md:w-2/5 aspect-[16/10] md:aspect-auto shrink-0 overflow-hidden">
        <Image
          src={image}
          alt={`${name} preview`}
          fill
          className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-3 p-5 md:p-6 flex-1">
        {/* Theme name */}
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          {name}
        </h3>

        {/* Author */}
        <div className="flex items-center gap-2">
          <Image
            src={`https://github.com/${author}.png`}
            alt={author}
            width={24}
            height={24}
            className="rounded-full"
          />
          <span className="text-sm text-neutral-600 dark:text-neutral-400">
            {author}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {description}
        </p>

        {/* Badges */}
        {badges && badges.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
            {badges.map((badge) => (
              <BadgeTag key={badge.label} badge={badge} />
            ))}
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block no-underline">
        {content}
      </a>
    );
  }

  return content;
}
