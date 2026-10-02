# Mix Space Documentation v3

## Contributing 贡献

这个站点基于 [Astro](https://astro.build) + [Fumadocs](https://fumadocs.vercel.app) 构建，样式使用 Tailwind CSS 4，输出为纯静态站点（`dist/`）。站点内容使用 MDX 编写，文档文件在仓库根目录的 `content/docs/` 文件夹中（内容目录保持在仓库根的 `content/docs/`，不随 Astro 迁移移动）。如果只有一些简单的修改，你可以直接在 GitHub 网页端进行修改并新建一个 Pull Request.

在本地开发中，[pnpm](https://pnpm.io) 被选用为项目的包管理器，需要 Node.js ≥ 22.12.0（推荐 24）。你需要使用 pnpm 安装依赖：

```bash
  pnpm install
  pnpm dev       # astro dev，本地开发服务器
  pnpm check     # astro check，类型检查
  pnpm build     # astro build，产物输出到 dist/
  pnpm preview   # astro preview，本地预览构建产物
```

## Working on the content 修改文字

- 关于支持的 MDX 扩展和在 MDX 内部使用 React 语法的能力，请参阅 Fumadocs 文档
- 有关编写和维护文档内容的规则和建议，请参阅编写指南。

## Guide 编写指南

<u>**新增一个章节**</u>：

1. 克隆此项目
2. 在 `content/docs` 文件夹中，新增一个文件夹，请语义化命名，假设为 `test`
3. 编写内容，具体可以借鉴其他文档文件夹，请务必设置了父文件夹的 `meta.json` 文件，具体请参考 Fumadocs 文档
4. 创建 Pull Request. 其余审核的事情只需要交给我们来做就好了

**<u>编写内容的时候需要注意的事情</u>**：

1. 中文与英文之间请保留一个空格，如`测试 test 测试`，可以使用 [AutoCorrect](https://github.com/huacnlee/autocorrect) 进行检查和修改

## Author

Docs © Mix Space Team, Released under MIT. Created on Nov 2, 2024
