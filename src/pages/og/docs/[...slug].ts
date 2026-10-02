import type { APIRoute } from 'astro';
import { generateOGImage } from 'fumadocs-ui/og/takumi';
import { getPageImage, source } from '@/lib/source';
import { appName } from '@/lib/shared';

export const prerender = true;

/**
 * `getPageImage(page).segments` 已含尾部的 `image.png`，join 成完整 slug 后
 * 最终产出 `/og/docs/<slug>/image.png`（1200x630），与 fumadocs 的 page.data.image 一致。
 */
export function getStaticPaths() {
  return source.getPages().map((page) => ({
    params: { slug: getPageImage(page).segments.join('/') },
    props: { page },
  }));
}

type Page = (typeof source)['$inferPage'];

export const GET: APIRoute<{ page: Page }> = ({ props }) => {
  const { page } = props;

  return generateOGImage({
    title: page.data.title,
    description: page.data.description,
    site: appName,
    format: 'png',
  });
};
