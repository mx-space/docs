import { generateOGImage } from 'fumadocs-ui/og/takumi';
import { appName } from '@/lib/shared';

export const prerender = true;

const description =
  'AI 驱动型内容管理系统，为个人博客、创作者主页和内容网站打造。';

/**
 * 站点默认分享图 `/og.png`（1200x630）。
 * 旧站 layout.tsx 引用了 `/og.png`，但 `public/og.png` 并不存在（默认分享图 404），
 * 这里用静态端点补上。
 */
export function GET() {
  return generateOGImage({
    title: appName,
    description,
    site: appName,
    format: 'png',
  });
}
