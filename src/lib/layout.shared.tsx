import { Image } from '@/components/image';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { gitConfig } from './shared';
import logo from '@/assets/logo.png';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="inline-flex items-center gap-2 font-semibold">
          {/* 静态导入：构建期打包出哈希 URL；logo.png 已物理压缩为 256px（导航处仅 24px 显示） */}
          <Image src={logo.src} alt="Mix Space" width={24} height={24} className="size-6 rounded" />
          Mix Space
        </span>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
