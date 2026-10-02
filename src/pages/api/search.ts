import { createFromSource } from 'fumadocs-core/search/server';
import { getStructuredData, source } from '@/lib/source';

export const prerender = true;

// 不传 language：默认 'multilingual'，对中文分词才是正确的
// （旧实现显式传了 language: 'english'，属于缺陷，迁移时去掉）
//
// buildIndex：fumadocs 默认的 buildIndexDefault 只认 `page.data.structuredData`
// （Next 时代由 fumadocs-mdx 的 remarkStructure({ exportAs: 'structuredData' }) 写进
// frontmatter）。Astro content layer 的 zod schema 不收这个字段，它会被剥掉，
// 于是默认实现直接 throw：
//   `Cannot find structured data from page, please define the page to index function.`
// 这里改为按页面即时生成：正文取集合条目的 raw body，用 `structure()` 解析。
const server = createFromSource(source, {
  buildIndex(page) {
    return {
      id: page.url,
      title: page.data.title ?? '',
      description: page.data.description,
      url: page.url,
      structuredData: getStructuredData(page.data._raw),
    };
  },
});

export const { staticGET: GET } = server;
