import { source } from '@/lib/source';
import type { APIRoute } from 'astro';

const SITE = 'https://mx-space.js.org';

export const prerender = true;

function escapeXml(value: string) {
  return value.replace(
    /[<>&'"]/g,
    (char) =>
      ({
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        "'": '&apos;',
        '"': '&quot;',
      })[char] as string,
  );
}

/**
 * 旧站（Next + next-sitemap）对外暴露的是 `/sitemap.xml`（内容为 sitemapindex →
 * sitemap-0.xml，含 54 条 URL）= 站点根 + 53 个文档页。
 *
 * `@astrojs/sitemap` 在 Astro 里只会产出 `/sitemap-index.xml` + `/sitemap-0.xml`，
 * 会让 `/sitemap.xml` 这个已被 robots.txt 与外部引用的 URL 消失，属真实回归。
 * 因此这里手写端点，保持 URL 与条数都不变。
 */
export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString();
  const urls = Array.from(
    new Set([SITE, ...source.getPages().map((page) => new URL(page.url, SITE).toString())]),
  ).sort();

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) =>
      `<url><loc>${escapeXml(url)}</loc><lastmod>${lastmod}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>`,
  )
  .join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
