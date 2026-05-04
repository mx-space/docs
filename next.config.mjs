import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  images: {
    domains: ['github.com', 'avatars.githubusercontent.com', 'pan.vinua.cn'],
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: '/docs/core',
        destination: '/docs/getting-started',
        permanent: true,
      },
      {
        source: '/docs/usage',
        destination: '/docs/use',
        permanent: true,
      },
      {
        source: '/docs/development',
        destination: '/docs/develop',
        permanent: true,
      },
      {
        source: '/docs/document',
        destination: '/docs/use/writing',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap'
      }
    ]
  }
};

export default withMDX(config);
