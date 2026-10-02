import type { ReactNode } from 'react';
import { Card as FumadocsCard, Cards, type CardProps } from 'fumadocs-ui/components/card';
import { toReactNode } from '@/lib/astro-jsx';

/**
 * fumadocs `Card` 的 Astro 兼容层。
 *
 * MDX 里写的是 `icon={<Bot />}`：Astro 的 MDX 运行时把它编译成 `{ 'astro:jsx': true, ... }`
 * 对象并作为 **prop** 传给 React 组件，而 `@astrojs/react` 只转换 children、不转换其它 props，
 * 于是 React 会抛 "Objects are not valid as a React child"。
 * 这里在边界上把 `icon` 转成真正的 React 元素（见 src/lib/astro-jsx.ts）。
 *
 * 由 astro.config.mjs 里的 `mx:astro-card-compat` 插件把 content/docs/** 中的
 * `import { Card, Cards } from 'fumadocs-ui/components/card'` 重定向到这里，
 * 因此 content/docs 不需要任何改动（保持“内容零搬迁”）。
 */
export { Cards };

export function Card({ icon, ...props }: CardProps) {
  return <FumadocsCard {...props} icon={toReactNode(icon) as ReactNode} />;
}
