import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { ExternalLink } from 'lucide-react';
import { File, Files, Folder } from 'fumadocs-ui/components/files';
import { Card, Cards } from '@/components/card';
import { Accordion, Accordions } from '@/components/accordion';
import { EnvVariableConfig } from '@/components/env-variable-config';
import { ToGithubGroup, ToGithub } from '@/components/to-github';


export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    // Card 与 Accordion 用 Astro 兼容层，覆盖 defaultMdxComponents 里的原件。
    // 有些 MDX（如 content/docs/deploy/community.mdx）没有显式 import 这些组件，
    // 直接吃这个映射，所以插件重定向与这里的映射两处都必须指向兼容层。
    Card,
    Cards,
    Accordion,
    Accordions,
    ExternalLink,
    File,
    Files,
    Folder,
    EnvVariableConfig,
    ToGithubGroup,
    ToGithub,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
