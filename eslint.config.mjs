/* eslint-disable */
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import vitestPlugin from '@vitest/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jestDomPlugin from 'eslint-plugin-jest-dom';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const flatCompat = new FlatCompat();

const commonConfigs = {
  settings: { react: { version: 'detect' } },
  linterOptions: {
    reportUnusedDisableDirectives: true,
  },
};

const typeScriptConfigs = [
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.eslint.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: false,
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
];

const reactConfigs = [
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    ...react.configs.flat.recommended,
    ...react.configs.flat['jsx-runtime'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    rules: {
      'react/prop-types': 'off',
    },
  },
  ...fixupConfigRules(flatCompat.extends('plugin:react-hooks/recommended')),
];

const importConfig = {
  plugins: { import: importPlugin },
  rules: {
    'import/extensions': [
      'error',
      {
        ignorePackages: true,
        pattern: {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
          css: 'always',
          config: 'always',
        },
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'object', 'index'],
        pathGroups: [
          {
            pattern: '{react,react-dom/**}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '{[A-Z]*,**/[A-Z]*}',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: './**.module.css',
            group: 'index',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'always',
      },
    ],
  },
};

const unusedImportsConfig = {
  plugins: { 'unused-imports': unusedImportsPlugin },
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
};

const vitestConfig = {
  ...vitestPlugin.configs.recommended,
  rules: {
    ...vitestPlugin.configs.recommended.rules,
    'vitest/consistent-test-it': ['error', { fn: 'test' }],
  },
};
const nextConfig = {
  plugins: { '@next/next': fixupPluginRules(nextPlugin) },
  rules: {
    ...nextPlugin.configs.recommended.rules,
    ...nextPlugin.configs['core-web-vitals'].rules,
  },
};

const jsxA11yConfig = {
  ...jsxA11yPlugin.flatConfigs.recommended,
  files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: { ...globals.serviceworker, ...globals.browser },
  },
};

export default tseslint.config(
  commonConfigs,
  eslint.configs.recommended,
  ...reactConfigs,
  ...typeScriptConfigs,
  importConfig,
  jsxA11yConfig,
  nextConfig,
  vitestConfig,
  jestDomPlugin.configs['flat/recommended'],
  unusedImportsConfig,
  eslintConfigPrettier,
);
