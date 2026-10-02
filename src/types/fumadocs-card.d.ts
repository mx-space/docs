// card.tsx 兼容层通过 `fumadocs-ui/dist/components/card.js` 深路径引用原组件
// （绕开 resolve.alias 的循环，见 astro.config.mjs），但 fumadocs-ui 的 exports
// 只导出 `./components/card`，TS 因此找不到该深路径的类型——这里桥接一份。
declare module 'fumadocs-ui/dist/components/card.js' {
  export * from 'fumadocs-ui/components/card';
}
