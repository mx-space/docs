import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import { Footer } from '@/components/footer';
import { RootProvider } from '@/components/root-provider';

export default function Home({
  pathname,
  children,
}: {
  pathname: string;
  children: ReactNode;
}): React.ReactElement {
  return (
    <RootProvider pathname={pathname}>
      <HomeLayout {...baseOptions()}>
        {children}
        <Footer />
      </HomeLayout>
    </RootProvider>
  );
}
