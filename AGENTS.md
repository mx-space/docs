# AGENTS.md

## 定位

Mix Space 官方文档站（https://mx-space.js.org）。Astro 7 + Fumadocs 16 输出纯静态站点到 `dist/`，由 GitHub Pages 托管（`main` push 自动部署，`deploy.yml` 注入 CNAME）。

## 跑起来

Node ≥ 22.12（CI 用 24），包管理器 **pnpm 11**。

```bash
pnpm install && pnpm dev      # 本地开发
pnpm build && pnpm preview    # 构建并预览产物
pnpm check                    # astro check
pnpm lint                     # eslint
pnpm pangu                    # 中英空格（CI 门禁）
node scripts/check-links.mjs  # 站内死链（CI 门禁，必须在 build 之后）
```

CI 门禁共 4 个 step：`pnpm build` → `pnpm check` → `check-links` → `pnpm pangu`。`pnpm lint` 存在但**未接进 CI**，只能本地跑。提交前把上面 6 条都过一遍。

## 技术栈

Astro 7.3 · Fumadocs 16.15 · React 19 · Tailwind 4（`@tailwindcss/vite`，无 config 文件）· Node 22+。

## 容易踩的地方

这些是 `astro.config.mjs` / 布局里刻意做的决定，改之前先读那里的注释：

- **内容目录不搬迁。** 仍在仓库根的 `content/docs/`（`src/content.config.ts` 的 `base: './content/docs'`，注意是相对项目根而非 `src`）。往 `src/` 挪会静默丢内容。
- **`markdown.processor: unified()` 不能删。** Astro 7 默认走自研 Sätteri 管线，不显式声明就会**静默忽略**全部 fumadocs remark/rehype 插件（代码高亮、heading id、steps 都会坏，构建仍然成功）。
- **fumadocs 的 `card` / `accordion` 用 `vite.resolve.alias` 重定向到 `src/components/*.tsx` 兼容层，不能改回 `resolveId` 插件。** dev 下 Vite 依赖预构建会把 specifier 打进 `.vite/deps`，绕过 `resolveId`，原版 Card 会崩。
- **`rollupOptions.onwarn` 的过滤是有判别力的，别放宽。** 它只吞 `MODULE_LEVEL_DIRECTIVE` + `astroPropagatedAssets` 这一组合（53 个 MDX = 53 条，来源是 Astro 源码里的字面量，无法关闭）。放宽会让「构建零警告」这条验收失去意义。
- **不要用 `@astrojs/sitemap`。** 它只产 `sitemap-index.xml` + `sitemap-0.xml`，会让旧站的 `/sitemap.xml` 消失。端点是手写的 `src/pages/sitemap.xml.ts`。
- **`scripts/check-links.mjs` 的 `KNOWN_PREEXISTING_DEAD` 是分类清单，不是白名单。** 当前 5 条登记、实际触发 2 条。确认新死链在旧站同样 404 后才可登记，且必须附旧站证据。
- **深色模式是 class 驱动的**（`<html class="dark">`，产物 CSS 是 `.dark\:xxx:where(.dark,.dark *)`）。`base.astro` 里的防闪脚本必须在 `astro:before-swap` 阶段把主题写进 `newDocument`，否则 Astro 交换 DOM 时会剥掉 `class` 导致客户端导航闪一下日间。

## 当前状态（2026-10-03）

- `main` = `5c1c017`，CI 全绿、已部署并线上验证。
- 2 条迁移前既有死链在清单内，非回归。
- `pnpm check` 剩 1 条 hint（`scripts/check-links.mjs:71` 未使用参数），非阻塞，已知未修。
- `scripts/verify-migration.mjs` 依赖 Next 时代的 `out/` 目录，该目录已随迁移删除，脚本目前跑不通。
- 全站内容以 `mx-space/core` **源码**为准核对过（核对基线：tag `v14.15.2` 之后 9 个提交的 master，commit `def0803`）。修改产品相关描述前先更新 `D:/AI/Mx/_research/core`（浅克隆，`git pull --ff-only` 即可）。已按源码修正的项：API 前缀为 `/api/v3`（`app.config.ts` 的 `API_VERSION = 3`）、部署文档的 pm2 配置与产物入口、webhook 事件名为点号形式、后台导航为「设置 → 分组 → 分区」三级结构（依据 `configs.dsl.util.ts` 的 `groupConfigs`）、加密字段由 `field.password()` 自动注入。
