import { writeFileSync } from 'fs'
import { globby } from 'globby'
import prettier from 'prettier'

async function generate() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
  
  // 根据 meta.json 文件结构生成路径
  const pages = await globby([
    'content/docs/core/**/*.mdx',
    'content/docs/development/**/*.mdx', 
    'content/docs/markdown/**/*.mdx',
    'content/docs/themes/**/*.mdx',
    'content/docs/usage/**/*.mdx',
    '!content/docs/**/meta.json',
    '!content/docs/**/_*.mdx'
  ])

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map((page) => {
            const path = page
              .replace('content/docs/', '')
              .replace('.mdx', '')
              .replace('/index', '')
            
            return `
              <url>
                  <loc>https://mx-space.js.org/docs/${path}</loc>
                  <lastmod>${new Date().toISOString()}</lastmod>
                  <changefreq>weekly</changefreq>
                  <priority>0.8</priority>
              </url>
            `
          })
          .join('')}
    </urlset>
    `

  // 等待 prettier.format 完成
  const formatted = await prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html'
  })

  writeFileSync('public/sitemap.xml', formatted)
}

generate() 