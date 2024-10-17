import { fixupPluginRules } from '@eslint/compat';
import eslint from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import vitestPlugin from '@vitest/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jestDomPlugin from 'eslint-plugin-jest-dom';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

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
      globals: {
        ...globals.node,
      },
      parserOptions: {
        project: ['./tsconfig.eslint.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    ...tseslint.configs.disableTypeChecked,
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
    files: ['**/*.{jsx,tsx}'],
    ...reactPlugin.configs.flat.recommended,
    ...reactPlugin.configs.flat['jsx-runtime'],
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
    plugins: { 'react-hooks': reactHooksPlugin },
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
      'react/prop-types': 'off',
    },
  },
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
          client: 'always',
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
