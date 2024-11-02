import './global.css';
import { Provider } from './components/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <Provider
          search={{
            options: {
              type: 'static'
            }
          }}
        >
          {children}
        </Provider>
      </body>
    </html>
  );
}
