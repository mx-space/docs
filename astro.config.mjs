import { fileURLToPath } from 'node:url';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import { unified } from '@astrojs/markdown-remark';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import {
  rehypeCode,
  remarkCodeTab,
  remarkHeading,
  remarkNpm,
  remarkStructure,
} from 'fumadocs-core/mdx-plugins';
import { remarkSteps } from 'fumadocs-core/mdx-plugins/remark-steps';
import { redirects } from './redirects.config.mjs';

/**
 * 把 content/docs 里对 fumadocs 组件的导入重定向到 Astro 兼容层。
 * 两个兼容层解决的问题不同，详见各自的源文件：
 * - `fumadocs-ui/components/card`      → src/components/card.tsx（JSX 作为 prop 传入 React 组件）
 * - `fumadocs-ui/components/accordion` → src/components/accordion.tsx（Radix Context 跨不出 Astro slot）
 *
 * 为什么用「按 importer 路径限定」的 resolveId 插件，而不是全局 alias：
 * 兼容层自己也要导入真正的 fumadocs 组件，全局 alias 会让它解析到自己（循环）。
 * 限定 importer 后，兼容层自身（src/components/**）与其它 consumer 都不受影响，
 * content/docs 也因此无需改动（保持“内容零搬迁”）。
 */
function astroReactCompat() {
  const shims = new Map([
    ['fumadocs-ui/components/card', fileURLToPath(new URL('./src/components/card.tsx', import.meta.url))],
    [
      'fumadocs-ui/components/accordion',
      fileURLToPath(new URL('./src/components/accordion.tsx', import.meta.url)),
    ],
  ]);

  return {
    name: 'mx:astro-react-compat',
    enforce: 'pre',
    resolveId(source, importer) {
      if (!importer || !/[\\/]content[\\/]docs[\\/]/.test(importer)) return null;

      return shims.get(source) ?? null;
    },
  };
}

// Astro 7 默认使用自研的 Sätteri Markdown 管线，fumadocs 的 remark/rehype 插件
// 只有在显式设置 `markdown.processor: unified()` 时才会生效。
export default defineConfig({
  site: 'https://mx-space.js.org',
  output: 'static',
  // Astro 7 的默认值是 'jsx'，会按 JSX 规则吃掉行内元素之间的空白；
  // 本站大量中英混排，先保持 v6 行为。
  compressHTML: true,
  redirects,
  markdown: {
    processor: unified({
      syntaxHighlight: false,
      remarkPlugins: [
        remarkHeading,
        remarkCodeTab,
        remarkNpm,
        [remarkStructure, { exportAs: 'structuredData' }],
        remarkSteps,
      ],
      rehypePlugins: [rehypeCode],
    }),
  },
  integrations: [
    react(),
    mdx({
      extendMarkdownConfig: true,
      syntaxHighlight: false,
    }),
    // 不使用 @astrojs/sitemap：它只产出 /sitemap-index.xml + /sitemap-0.xml，
    // 会让旧站既有的 /sitemap.xml 消失。改由 src/pages/sitemap.xml.ts 手写端点，
    // 保持 URL 与条数与旧站一致。
  ],
  vite: {
    plugins: [astroReactCompat(), tailwindcss()],
    build: {
      rollupOptions: {
        // Astro 7 的 content-assets 插件会为**每个 MDX**生成一个虚拟模块
        // `<file>.mdx?astroPropagatedAssets`，其注入源码里硬编码了一行
        // `"use astro:head-inject";`（见 astro/dist/content/vite-plugin-content-assets.js:103-112）。
        // rolldown 对 bundler 注入的 module-level 指令会打 MODULE_LEVEL_DIRECTIVE 警告，
        // 本站 53 个 MDX 页面 = 53 条，全部指向这个虚拟模块，与我们写的代码无关，
        // 也没有开关可以关掉（该字符串在 Astro 源码里是字面量）。
        // 这里按「警告 code + 虚拟模块 id」双重精确过滤，其余任何警告照常输出，
        // 以保证“构建零警告”这条验收仍然有判别力。
        onwarn(warning, defaultHandler) {
          const where = `${warning.id ?? ''} ${warning.message ?? ''}`;

          if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && where.includes('astroPropagatedAssets')) {
            return;
          }

          defaultHandler(warning);
        },
      },
    },
  },
});
