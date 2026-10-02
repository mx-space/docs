import * as React from 'react';

const ASTRO_JSX = 'astro:jsx';

type AstroJsxNode = {
  [ASTRO_JSX]: true;
  type: unknown;
  props?: Record<string, unknown>;
};

function isAstroJsxNode(value: unknown): value is AstroJsxNode {
  return (
    typeof value === 'object' && value !== null && (value as Record<string, unknown>)[ASTRO_JSX] === true
  );
}

/**
 * 把 Astro 的 JSX 节点转换成 React 节点。
 *
 * Astro 的 MDX 运行时把 `<Bot />` 编译成 `{ 'astro:jsx': true, type, props }` 对象。
 * Astro 自己的 `renderJSX` 认识这个对象，React 不认识 —— 直接交给 React 会抛
 * `Objects are not valid as a React child (found: object with keys {astro:jsx, type, props})`。
 *
 * `@astrojs/react` 的 `renderToStaticMarkup` 只把 **children** 包成 `<astro-slot>`，
 * 其余 props 原样透传（见 @astrojs/react/dist/server.js:50-80），所以只要 JSX 元素是
 * 作为 **prop**（例如 fumadocs `Card` 的 `icon={<Bot />}`）传进 React 组件的，就必须在
 * 边界上手工转换。
 */
export function toReactNode(node: unknown): unknown {
  if (Array.isArray(node)) return node.map((item) => toReactNode(item));
  if (!isAstroJsxNode(node)) return node;

  const { type, props } = node;
  const { children, ...rest } = props ?? {};
  const converted: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(rest)) {
    converted[key] = toReactNode(value);
  }

  return React.createElement(
    type as React.ElementType,
    converted as React.Attributes,
    children === undefined ? undefined : (toReactNode(children) as React.ReactNode),
  );
}
