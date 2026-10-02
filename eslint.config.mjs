import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';

// Next.js 已由 Astro 取代：去掉 eslint-config-next，改用
// typescript-eslint + eslint-plugin-astro 的最小 flat config。
const eslintConfig = defineConfig([
  globalIgnores([
    'dist/**',
    '.astro/**',
    'node_modules/**',
    'build/**',
    'coverage/**',
    'public/**',
  ]),
  ...tseslint.configs.recommended,
  ...astro.configs['flat/recommended'],
  {
    name: 'mx-docs/overrides',
    rules: {
      // 构建产物与脚本中的 `any` 不做强制约束
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
]);

export default eslintConfig;
