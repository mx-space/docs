import type { CSSProperties, ImgHTMLAttributes } from 'react';

/**
 * 迁移前站点所用 Image 组件的直接替代品。
 *
 * 旧站开启过 `images.unoptimized: true`，实际渲染产物本就是普通 `<img>`；
 * 本组件在 Astro 下复现同样的行为，并保留全仓库沿用的那套 Image props 面。
 */
export function Image({
  src,
  srcSet,
  alt,
  width,
  height,
  fill,
  priority,
  className,
  sizes,
  style,
  ...rest
}: {
  src: string;
  /** 响应式 srcset（由 src/lib/images.ts 在构建期生成，如 `xx.webp 640w, yy.webp 960w`） */
  srcSet?: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  sizes?: string;
  style?: CSSProperties;
  [key: string]: unknown;
}): React.ReactElement {
  const mergedClassName = fill
    ? ['absolute inset-0 size-full object-cover', className]
        .filter(Boolean)
        .join(' ')
    : className;

  return (
    <img
      {...(rest as ImgHTMLAttributes<HTMLImageElement>)}
      src={src}
      {...(srcSet ? { srcSet } : {})}
      alt={alt}
      {...(fill ? {} : { width, height })}
      className={mergedClassName}
      sizes={sizes}
      style={style}
      loading={priority ? 'eager' : 'lazy'}
      {...(priority ? { fetchPriority: 'high' as const } : {})}
    />
  );
}

/**
 * 兼容用默认导出：迁移前该组件是以默认导入方式引用的，而
 * `src/lib/layout.shared.tsx` 目前仍是 `import Image from '@/components/image'`。
 * 上面那个命名导出才是冻结的规范接口；此处别名让两种导入写法都能解析。
 * 等所有调用点都改为命名导入后，可安全删除本行。
 */
export default Image;
