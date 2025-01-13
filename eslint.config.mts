// @ts-nocheck
import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import { flatConfigs } from 'eslint-plugin-import';
import { configs as litConfigs } from 'eslint-plugin-lit';
import nodePlugin from 'eslint-plugin-n';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import pluginPromise from 'eslint-plugin-promise';
import { configs as wcConfigs } from 'eslint-plugin-wc';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config({
  extends: [
    js.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    flatConfigs.recommended,
    litConfigs['flat/recommended'],
    nodePlugin.configs['flat/recommended-module'],
    pluginPromise.configs['flat/recommended'],
    wcConfigs['flat/best-practice'],
    eslintConfigPrettier
  ],
  files: ['**/*.{ts,tsx}'],
  settings: {
    'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
    'import/resolver': { typescript: true, node: true }
  },
  languageOptions: {
    globals: {
      ...globals.serviceworker,
      ...globals.browser,
      ...globals.es2024
    },
    parser: tseslint.parser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      projectService: true
    }
  },
  plugins: { 'no-relative-import-paths': noRelativeImportPaths },
  rules: {
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/explicit-member-accessibility': 2,
    '@typescript-eslint/explicit-function-return-type': 2,
    '@typescript-eslint/consistent-type-imports': [2, { fixStyle: 'inline-type-imports' }],
    'no-relative-import-paths/no-relative-import-paths': [2, { rootDir: 'src', prefix: '@' }],
    'import/order': [2, { 'newlines-between': 'always', alphabetize: { order: 'asc' } }],
    'import/consistent-type-specifier-style': [2, 'prefer-inline'],
    'import/extensions': [2, 'ignorePackages'],
    'import/no-named-as-default-member': 0,
    'import/no-useless-path-segments': 2,
    'import/no-named-as-default': 0,
    'import/no-default-export': 2,
    'import/group-exports': 2,
    'n/no-unsupported-features/node-builtins': 0,
    'n/no-missing-import': 0,
    'no-unused-vars': 0,
    'prefer-const': 2,
    'padding-line-between-statements': [2,
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] }],
    eqeqeq: 2,
    '@typescript-eslint/no-unnecessary-condition': 0,
    '@typescript-eslint/use-unknown-in-catch-callback-variable': 0
  }
}) satisfies FlatConfig.ConfigArray;