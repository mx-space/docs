import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Provider } from '@/components/provider';
import './global.css';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mx-space.js.org'),
  title: {
    default: 'Mix Space - 现代化的个人空间解决方案',
    template: '%s | Mix Space',
  },
  description:
    '基于 Next.js 的 AI 驱动型内容管理系统，为个人博客、创作者主页和内容网站打造。支持前后端分离、混合编辑器、AI 集成。',
  keywords: [
    'Mix Space',
    '个人博客',
    'CMS',
    '内容管理系统',
    'Next.js',
    'AI',
    '个人空间',
    '博客系统',
    '开源',
  ],
  authors: [{ name: 'Mix Space Team' }],
  creator: 'Mix Space',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://mx-space.js.org',
    siteName: 'Mix Space',
    title: 'Mix Space - 现代化的个人空间解决方案',
    description:
      '基于 Next.js 的 AI 驱动型内容管理系统，为个人博客、创作者主页和内容网站打造。',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Mix Space',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mix Space - 现代化的个人空间解决方案',
    description:
      '基于 Next.js 的 AI 驱动型内容管理系统，为个人博客、创作者主页和内容网站打造。',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={inter.className} suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://mx-space.js.org" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
