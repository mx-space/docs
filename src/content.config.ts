import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
// z 从 astro/zod 导入：astro:content 的 re-export 已标记 deprecated 并计划移除。
// 本文件此前贡献 13 条 ts(6385) 弃用 hint，换成官方 ./zod 入口后全部消除。
import { z } from 'astro/zod';

/**
 * 内容目录仍然保持在仓库根的 `content/docs`（与 Next 时代完全一致，零搬迁）。
 * 注意 `base` 是相对**项目根**，而不是相对 src。
 */
const docs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    icon: z.string().optional(),
    /** DocsPage 的整宽开关 */
    full: z.boolean().optional(),
  }),
});

const meta = defineCollection({
  loader: glob({ pattern: '**/*.{json,yaml,yml}', base: './content/docs' }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    icon: z.string().optional(),
    root: z.boolean().optional(),
    /** fumadocs 的侧边栏条目顺序，支持 '---分隔线---' 与 '...展开' 之类的特殊项 */
    pages: z.array(z.string()).optional(),
  }),
});

export const collections = { docs, meta };
