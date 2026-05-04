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
      // Old section redirects — keep for backward compat (bookmarks, external links)
      // Dev mode: handled by these redirects. Production: handled by static HTML in public/docs/.
      { source: '/docs/core', destination: '/docs/getting-started', permanent: true },
      { source: '/docs/core/index', destination: '/docs/getting-started', permanent: true },
      { source: '/docs/core/features', destination: '/docs/getting-started', permanent: true },
      { source: '/docs/core/docker', destination: '/docs/deploy/docker', permanent: true },
      { source: '/docs/core/bash', destination: '/docs/deploy/one-script', permanent: true },
      { source: '/docs/core/advanced', destination: '/docs/deploy/source', permanent: true },
      { source: '/docs/core/extra', destination: '/docs/deploy/external-services', permanent: true },
      { source: '/docs/core/community', destination: '/docs/deploy/community', permanent: true },
      { source: '/docs/usage', destination: '/docs/use', permanent: true },
      { source: '/docs/usage/index', destination: '/docs/use', permanent: true },
      { source: '/docs/usage/serverless', destination: '/docs/use/serverless', permanent: true },
      { source: '/docs/usage/obsidian', destination: '/docs/use/writing', permanent: true },
      { source: '/docs/usage/backup', destination: '/docs/use/backup-restore', permanent: true },
      { source: '/docs/usage/update', destination: '/docs/use/update', permanent: true },
      { source: '/docs/usage/search', destination: '/docs/configure/algolia', permanent: true },
      { source: '/docs/usage/security', destination: '/docs/configure/encryption', permanent: true },
      { source: '/docs/usage/oauth', destination: '/docs/configure/oauth', permanent: true },
      { source: '/docs/usage/xlog', destination: '/docs/use/writing', permanent: true },
      { source: '/docs/development', destination: '/docs/develop', permanent: true },
      { source: '/docs/development/index', destination: '/docs/develop', permanent: true },
      { source: '/docs/development/admin', destination: '/docs/develop/admin', permanent: true },
      { source: '/docs/development/frontend', destination: '/docs/develop/frontend', permanent: true },
      { source: '/docs/document', destination: '/docs/develop/contribute', permanent: true },
      { source: '/docs/document/index', destination: '/docs/develop/contribute', permanent: true },
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
