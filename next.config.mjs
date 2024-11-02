import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  images: {
    domains: ['github.com', 'avatars.githubusercontent.com', 'pan.vinua.cn'],
    unoptimized: true
  }
};

export default withMDX(config);
