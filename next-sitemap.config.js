/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://mx-space.js.org',
  generateRobotsTxt: false,
  outDir: 'out',
  exclude: ['/api/*', '/og/*', '/llms.txt', '/llms-full.txt', '/llms.mdx/*', '/__next.*'],
};

module.exports = config;
