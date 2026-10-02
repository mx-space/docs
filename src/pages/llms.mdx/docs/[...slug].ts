import type { APIRoute } from 'astro';
import { getLLMText, getPageMarkdownUrl, source } from '@/lib/source';

export const prerender = true;

/**
 * `getPageMarkdownUrl(page).segments` 已经含尾部的 `content.md`，
 * 而 Astro 的 param 只能是 string，所以这里直接 join 成完整 slug，
 * 最终产出 `/llms.mdx/docs/<slug>/content.md`（与 fumadocs 的 markdownUrl 形状一致）。
 */
export function getStaticPaths() {
  return source.getPages().map((page) => ({
    params: { slug: getPageMarkdownUrl(page).segments.join('/') },
    props: { page },
  }));
}

type Page = (typeof source)['$inferPage'];

export const GET: APIRoute<{ page: Page }> = async ({ props }) => {
  return new Response(await getLLMText(props.page), {
    headers: { 'Content-Type': 'text/markdown' },
  });
};
