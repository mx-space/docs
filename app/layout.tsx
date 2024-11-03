import './global.css';
import { Provider } from './components/provider';
import type { ReactNode } from 'react';

export const metadata = {
  title: {
    template: '%s - Mix Space 文档',
    default: 'Mix Space - 现代化的个人空间解决方案'
  },
  description: 'Mix Space 是一个小型个人空间站点程序，采用前后端分离设计，适合喜欢写作的你。',
  keywords: ['Mix Space', '个人博客', '个人空间', '开源博客', 'Next.js', 'React', 'TypeScript'],
  authors: [{ name: 'Mix Space Team' }],
  openGraph: {
    title: 'Mix Space Documentation',
    description: '探索 Mix Space',
    url: 'https://mx-space.js.org',
    siteName: 'Mix Space Docs',
    locale: 'zh_CN',
    type: 'website',
  }
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <title>Mix Space - 现代化的个人空间解决方案</title>
        <meta name="description" content="Mix Space 是一个小型个人空间站点程序，采用前后端分离设计，适合喜欢写作的你。" />
        <meta name="keywords" content="Mix Space, 个人博客, 个人空间, 开源博客, Next.js, React, TypeScript" />
        <meta name="author" content="Mix Space Team" />
        <meta property="og:title" content="Mix Space Documentation" />
        <meta property="og:description" content="探索 Mix Space" />
        <meta property="og:url" content="https://mx-space.js.org" />
        <meta property="og:site_name" content="Mix Space Docs" />
        <meta property="og:locale" content="zh_CN" />
        <meta property="og:type" content="website" />
      </head>
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
