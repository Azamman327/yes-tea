import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      '!.next/',
      '!node_modules/',
      'package.json',
      'package-lock.json',
      'next.config.mjs',
      'postcss.config.mjs',
      'tailwind.config.ts',
      'src/components/',
    ],
  },
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
