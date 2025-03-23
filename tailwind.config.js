/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './mdx-components.{ts,tsx}',
    '../node_modules/fumadocs-ui/dist/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        oxanium: ['var(--font-oxanium)'],
        // 添加定制字体到 sans, serif 和 mono 中
        sans: ['Inter', 'LXGW Neo XiHei', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Noto Serif SC', 'Source Han Serif SC', 'serif'],
        mono: ['JetBrains Mono', 'LXGW WenKai Mono', 'monospace'],
      },
    },
  },
};
