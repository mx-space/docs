import './global.css';
import { Provider } from './components/provider';
import { Oxanium, Noto_Serif_SC } from 'next/font/google';
import type { ReactNode } from 'react';

const oxanium = Oxanium({
  subsets: ['latin'],
  variable: '--font-oxanium',
  display: 'swap'
});

const notoSerifSC = Noto_Serif_SC({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-serif-sc',
  display: 'swap'
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`${oxanium.variable} ${notoSerifSC.variable}`}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
