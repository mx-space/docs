import { llms } from 'fumadocs-core/source';
import { source } from '@/lib/source';

export const prerender = true;

// 注意：fumadocs-core 的 `llms().index()` 是 **async** 方法
// （node_modules/fumadocs-core/dist/source/llms.js:69 `async index(lang) { ... }`），
// 直接当 body 会被字符串化成 `[object Promise]`（实测 16 字节），必须 await。
export async function GET() {
  return new Response(await llms(source).index());
}
