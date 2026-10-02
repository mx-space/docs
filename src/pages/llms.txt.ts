import { llms } from 'fumadocs-core/source';
import { source } from '@/lib/source';

export const prerender = true;

// 注意：fumadocs-core 的 `llms().index()` 是 **async** 方法
// （node_modules/fumadocs-core/dist/source/llms.js:69 `async index(lang) { ... }`），
// 直接当 body 会被字符串化成 `[object Promise]`（实测 16 字节），必须 await。
export async function GET() {
  const index = await llms(source).index();
  // llms.txt 约定：索引中的链接应指向 Markdown 内容本身。
  // fumadocs 的 index() 固定输出页面 HTML URL，这里统一改写为 `+.mdx`
  // （对应 /docs/<slug>.mdx 端点，AI 代理可直接抓取 Markdown 全文）。
  const body = index.replace(/(\]\(\/docs\/[^)]*?)\)/g, '$1.mdx)');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
