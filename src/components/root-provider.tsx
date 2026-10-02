import type { ReactNode } from 'react';
import { RootProvider as FumaRootProvider } from 'fumadocs-ui/provider/astro';
import { SearchDialog } from '@/components/search';

export function RootProvider({
  children,
  pathname,
  params,
}: {
  children: ReactNode;
  pathname: string;
  params?: Record<string, string | string[] | undefined>;
}): React.ReactElement {
  return (
    <FumaRootProvider
      pathname={pathname}
      params={params}
      search={{ SearchDialog }}
    >
      {children}
    </FumaRootProvider>
  );
}
