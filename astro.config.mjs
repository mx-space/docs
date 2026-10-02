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
 * 把全站对 fumadocs 组件的导入重定向到 Astro 兼容层。
 * 两个兼容层解决的问题不同，详见各自的源文件：
 * - `fumadocs-ui/components/card`      → src/components/card.tsx（JSX 作为 prop 传入 React 组件）
 * - `fumadocs-ui/components/accordion` → src/components/accordion.tsx（Radix Context 跨不出 Astro slot）
 *
 * 为什么用 resolve.alias 而不是 resolveId 插件：dev 下 Vite 的依赖预构建
 * （optimizeDeps）会把 `fumadocs-ui/components/card` 打进 .vite/deps，让
 * content 里的显式 import 直接命中优化产物、绕过 resolveId——原版 Card 于是
 * 把 astro:jsx 对象当 React child 渲染而崩（build 不走 optimizeDeps，所以
 * 旧方案只在 build 验证过、未暴露此问题）。alias 在所有阶段（含 optimizeDeps）
 * 生效，从根上重定向；兼容层自身已改用 dist 深路径，不会形成循环。
 */
const astroReactAliases = [
  {
    find: 'fumadocs-ui/components/card',
    replacement: fileURLToPath(new URL('./src/components/card.tsx', import.meta.url)),
  },
  {
    find: 'fumadocs-ui/components/accordion',
    replacement: fileURLToPath(new URL('./src/components/accordion.tsx', import.meta.url)),
  },
  // 兼容层自身引用原组件用的「深路径」specifier：fumadocs-ui 的 exports 不导出
  // ./dist/**，这里直接映射到真实文件。specifier 与上面的 find 不同，不会循环。
  {
    find: 'fumadocs-ui/dist/components/card.js',
    replacement: fileURLToPath(
      new URL('./node_modules/fumadocs-ui/dist/components/card.js', import.meta.url),
    ),
  },
];

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
    resolve: {
      alias: astroReactAliases,
    },
    plugins: [tailwindcss()],
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
