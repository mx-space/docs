import './global.css';
import { Provider } from './components/provider';
import ToolBox from './components/ToolBox';
import type { ReactNode } from 'react';

export const metadata = {
  title: {
    template: '%s - Mix Space 文档',
    default: 'Mix Space 文档 - 现代化的个人空间解决方案'
  },
  description: 'Mix Space 是一个小型个人空间站点程序，采用前后端分离设计，适合喜欢写作的你。',
  keywords: ['Mix Space', '个人博客', '个人空间', '开源博客', 'Next.js', 'React', 'TypeScript'],
  authors: [{ name: 'Mix Space Team' }],
  openGraph: {
    title: 'Mix Space 文档',
    description: '探索 Mix Space',
    url: 'https://mx-space.js.org',
    siteName: 'Mix Space 文档',
    locale: 'zh_CN',
    type: 'website',
    images: ['/logo.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        {/* 合并字体请求到单个 link 标签，以提升页面加载速度 */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Serif+SC:wght@400;500;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Provider>
          {children}
        </Provider>
        <ToolBox />
      </body>
    </html>
  );
}
