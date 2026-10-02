import { getCollection, type CollectionEntry } from 'astro:content';
import { structure } from 'fumadocs-core/mdx-plugins';
import {
  loader,
  type MetaData,
  type PageData,
  type StaticSource,
  type VirtualFile,
} from 'fumadocs-core/source';
import { docsContentRoute, docsImageRoute, docsRoute } from './shared';

export type DocsEntry = CollectionEntry<'docs'>;
export type MetaEntry = CollectionEntry<'meta'>;

/**
 * 手写 StaticSource 时必须显式声明 data 类型，否则 `loader()` 会退化成默认的
 * `PageData`（`title?: string`、没有 `_raw`），`page.data.full` / `page.data.title`
 * 在 `src/pages/**` 里全部报 ts(2339)/ts(2322)。
 * 这里的字段与 `src/content.config.ts` 的 zod schema 一一对应，只多了 `_raw`。
 */
export type DocsPageData = Omit<PageData, 'title'> & {
  title: string;
  full?: boolean;
  /** content layer 的原始 entry：`render()`、`getLLMText()`、结构化数据都要用 */
  _raw: DocsEntry;
};
export type DocsMetaData = MetaData;

type DocsSourceConfig = { pageData: DocsPageData; metaData: DocsMetaData };
type DocsVirtualFile = VirtualFile<DocsSourceConfig>;

/**
 * 把 content layer 给出的文件路径归一成相对 `content/docs` 的 posix 路径（如 `use/faq.mdx`）。
 * content layer 在不同场景下给出的是相对项目根或绝对路径，这里两种都能处理。
 */
function toContentPath(filePath: string | undefined, id: string): string {
  const raw = (filePath ?? id).replace(/\\/g, '/');
  const marker = 'content/docs/';
  const index = raw.indexOf(marker);

  if (index >= 0) return raw.slice(index + marker.length);

  return raw.replace(/^\/+/, '');
}

async function createSource(): Promise<StaticSource<DocsSourceConfig>> {
  const [pages, metas] = await Promise.all([getCollection('docs'), getCollection('meta')]);

  return {
    files: [
      ...pages.map(
        (page): DocsVirtualFile => ({
          type: 'page',
          path: toContentPath(page.filePath, page.id),
          data: { ...page.data, _raw: page },
          absolutePath: page.filePath,
        }),
      ),
      ...metas.map(
        (meta): DocsVirtualFile => ({
          type: 'meta',
          path: toContentPath(meta.filePath, meta.id),
          data: meta.data,
          absolutePath: meta.filePath,
        }),
      ),
    ],
  };
}

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: docsRoute,
  source: await createSource(),
});

export function getPageImage(page: (typeof source)['$inferPage']) {
  const segments = [...page.slugs, 'image.png'];

  return {
    segments,
    url: `${docsImageRoute}/${segments.join('/')}`,
  };
}

export function getPageMarkdownUrl(page: (typeof source)['$inferPage']) {
  const segments = [...page.slugs, 'content.md'];

  return {
    segments,
    url: `${docsContentRoute}/${segments.join('/')}`,
  };
}

/**
 * 搜索索引用的结构化数据。
 * Next 时代由 fumadocs-mdx 在构建期算好；Astro 下需要自己调用 `structure()`。
 */
export function getStructuredData(entry: DocsEntry) {
  return structure(entry.body ?? '');
}

/**
 * 只剥掉文件**开头**的 frontmatter 与裸 import/export 语句，
 * 不能全局替换，否则会误删代码块里的 import。
 */
function stripLeadingModuleSyntax(body: string): string {
  const withoutFrontmatter = body.replace(/^\uFEFF?---\r?\n[\s\S]*?\r?\n---\r?\n?/, '');
  const lines = withoutFrontmatter.split(/\r?\n/);
  let index = 0;

  while (
    index < lines.length &&
    (lines[index].trim() === '' || /^\s*(import|export)\b/.test(lines[index]))
  ) {
    index += 1;
  }

  return lines.slice(index).join('\n').trim();
}

export async function getLLMText(page: (typeof source)['$inferPage']) {
  const body = stripLeadingModuleSyntax(page.data._raw?.body ?? '');

  return `# ${page.data.title} (${page.url})

${body}`;
}
