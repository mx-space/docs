import { getLLMText, source } from '@/lib/source';

export const prerender = true;

export async function GET() {
  const pages = await Promise.all(source.getPages().map((page) => getLLMText(page)));
  return new Response(pages.join('\n\n'));
}
