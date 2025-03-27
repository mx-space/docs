import './global.css'
import { Provider } from './components/provider';
import type { ReactNode } from 'react';
import type { Metadata } from 'next'
import { env } from 'std-env'
const baseUrl = env.NEXT_PUBLIC_BASE_URL || 'https://mx-space.js.org'
const metaDescription = `Mix Space 是一个小型个人空间站点程序，采用前后端分离设计，适合喜欢写作的你。`
const metaTitle = 'Mix Space 文档 - 现代化的个人空间解决方案'
const ogImageUrl = 'https://mx-space.js.org/assets/images/preview/console.png'

export const metadata: Metadata = {
  title: { default: metaTitle, template: '%s - Mix Space 文档' },
  description: metaDescription,
  keywords: `Mix Space, 个人博客, 个人空间, 开源博客, Next.js, React, TypeScript`,
  creator: '@MixSpace Team',
  openGraph: {
    url: baseUrl,
    title: metaTitle,
    description: metaDescription,
    images: { url: ogImageUrl },
    siteName: 'Mix Space 文档',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
      </head>
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
