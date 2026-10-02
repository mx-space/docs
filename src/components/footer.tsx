import { Heart } from 'lucide-react';
import { Image } from '@/components/image';
import logo from '@/assets/logo.png';

export function Footer() {
  return (
    <footer className="w-full border-t bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Image src={logo.src} alt="Mix Space" width={28} height={28} className="size-7 rounded" />
            <span className="font-semibold text-neutral-900 dark:text-neutral-50">
              Mix Space
            </span>
          </div>
          <p className="flex items-center gap-1 text-xs text-neutral-400 dark:text-neutral-500">
            &copy; 2021-{new Date().getFullYear()} Mix Space Team &middot; Built with <Heart className="size-3 fill-pink-500 text-pink-500" /> by Mix Space Community
          </p>
        </div>
      </div>
    </footer>
  );
}
