import type { APIRoute } from 'astro';
import { getLLMText, source } from '@/lib/source';

export const prerender = true;

/**
 * Fumadocs 的 LLM 约定：在页面 URL 末尾追加 `.mdx` 即得到该页的 Markdown 版本
 * （参见 fumadocs.dev/docs/integrations/llms 的 `*.md` 一节）。
 * 文件名 `[...slug].mdx.ts` 中的 `.mdx` 是路由后缀而非参数的一部分，
 * 最终产出 `/docs/<slug>.mdx`，与 `MarkdownCopyButton` 使用的 markdownUrl 一致。
 */
export function getStaticPaths() {
  return source.getPages().map((page) => ({
    params: { slug: page.slugs.join('/') },
    props: { page },
  }));
}

type Page = (typeof source)['$inferPage'];

export const GET: APIRoute<{ page: Page }> = async ({ props }) => {
  return new Response(await getLLMText(props.page), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
