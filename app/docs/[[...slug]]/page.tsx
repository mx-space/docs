import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { getGithubLastEdit } from 'fumadocs-core/server';
import defaultMdxComponents from 'fumadocs-ui/mdx';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>; // 修改类型为 Promise
}) {
  const params = await props.params; // 确保 await params
  const page = source.getPage(params.slug);
  if (!page) notFound();

  let time: Date | undefined;
  try {
    const lastEdit = await getGithubLastEdit({
      owner: 'mx-space',
      repo: 'docs',
      path: `content/docs/${page.file.path}`,
    });
    time = lastEdit ?? undefined;
  } catch (error) {
    console.error(error);
  }

  const MDX = page.data.body;

  return (
    <DocsPage 
      toc={page.data.toc} 
      full={page.data.full}
      lastUpdate={time ?? undefined}
      editOnGithub={{
        owner: 'mx-space',
        repo: 'docs',
        sha: 'main',
        path: `content/docs/${page.file.path}`,
      }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={defaultMdxComponents} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>; // 修改类型为 Promise
}) {
  const params = await props.params; // 确保 await params
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
