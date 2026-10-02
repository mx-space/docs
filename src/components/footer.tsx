import { Image } from '@/components/image';
import logo from '@/assets/logo.png';

export function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200/80 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image src={logo.src} alt="Mix Space" width={28} height={28} className="size-7 rounded" />
            <span className="font-semibold text-neutral-900 dark:text-neutral-50">
              Mix Space
            </span>
          </div>
          <div className="flex items-center gap-5 text-xs text-neutral-500 dark:text-neutral-400">
            <a
              href="/docs"
              className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              文档
            </a>
            <a
              href="https://github.com/mx-space"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              GitHub
            </a>
            <span>&copy; 2021-{new Date().getFullYear()} Mix Space Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
