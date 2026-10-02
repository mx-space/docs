import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

export interface ResponsiveImage {
  src: string;
  srcSet: string;
  sizes: string;
  width: number;
  height: number;
}

/**
 * 构建期为同一张源图生成多档宽度的 WebP 派生图，返回可直接喂给 `<img>` 的
 * plain object（可序列化，因此能安全地作为 props 传进 `client:*` 岛屿——
 * 岛屿内部无法使用 `astro:assets`，优化必须发生在 .astro 层）。
 *
 * 超过源图固有宽度的档位会被丢弃，避免放大模糊。
 */
export async function responsiveImage(
  image: ImageMetadata,
  widths: number[],
  sizes: string,
): Promise<ResponsiveImage> {
  const usable = widths.filter((width) => width <= image.width);
  const effective = usable.length > 0 ? usable : [image.width];

  const candidates = await Promise.all(
    effective.map(async (width) => {
      const { src } = await getImage({ src: image, width, format: 'webp' });
      return `${src} ${width}w`;
    }),
  );
  const largest = effective[effective.length - 1];
  const { src } = await getImage({ src: image, width: largest, format: 'webp' });

  return { src, srcSet: candidates.join(', '), sizes, width: image.width, height: image.height };
}
