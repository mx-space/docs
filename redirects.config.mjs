/**
 * 重定向规则配置
 * key: 源路径 (如 '/old-path')
 * value: 目标 URL，可以是相对路径或绝对 URL
 *
 * 使用方: astro.config.mjs 的 `redirects` 字段（唯一使用方）。
 * 开发环境: astro dev 的 dev server 直接返回 302。
 * 静态部署: astro build 在 output: 'static' 下为每条规则生成带 meta refresh 的 HTML 跳转页，
 *           因此不再需要 scripts/generate-redirects.mjs。
 */
export const redirects = {
  '/docs/core/advanced': '/docs/core/advanced/overview',
  '/docs/core/docker': '/docs/deploy/docker',
};
