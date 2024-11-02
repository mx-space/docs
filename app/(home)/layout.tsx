import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';

export default function Layout({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  return (
    <HomeLayout {...baseOptions}>
      {children}
      <Footer />
    </HomeLayout>
  );
}



function Footer(): React.ReactElement {
  return (
    <footer className="mt-auto border-t bg-fd-card py-12 text-fd-secondary-foreground">
      <div className="container flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-1 text-sm font-semibold">Mix Space </p>
          <p className="text-xs">
             Built with ❤️ by {2021}-{new Date().getFullYear()} by{' '}
            <a
              href="https://github.com/mx-space"
              rel="noreferrer noopener"
              target="_blank"
              className="font-medium"
            >
              Mix Space Team
            </a>
          </p>
          <p className="text-xs">
            This project is licensed under AGPLv3 with additional terms, and this documentation is licensed under CC BY 4.0.
          </p>
        </div>
      </div>
    </footer>
  );
}