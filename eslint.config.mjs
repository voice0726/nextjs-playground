import eslint from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import vitestPlugin from '@vitest/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginImportX from 'eslint-plugin-import-x';
import jestDomPlugin from 'eslint-plugin-jest-dom';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import storybookPlugin from 'eslint-plugin-storybook';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import globals from 'globals';
import { configs as tsEslintConfigs, config } from 'typescript-eslint';

const commonConfigs = {
  settings: { react: { version: 'detect' } },
  linterOptions: {
    reportUnusedDisableDirectives: true,
  },
};

const typeScriptConfigs = [
  ...tsEslintConfigs.recommendedTypeChecked,
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
    ...tsEslintConfigs.disableTypeChecked,
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

const importXConfigs = [
  eslintPluginImportX.flatConfigs.recommended,
  eslintPluginImportX.flatConfigs.typescript,
  {
    name: 'import-x/rules',
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    ignores: ['eslint.config.js'],
    rules: {
      'import-x/namespace': 'off',
      'import-x/extensions': [
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
      'import-x/order': [
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
  },
];

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
  plugins: { '@next/next': nextPlugin },
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

const storybookConfig = {
  plugins: { storybook: storybookPlugin },
  rules: {
    ...storybookPlugin.configs.recommended.rules,
  },
};

export default config(
  commonConfigs,
  eslint.configs.recommended,
  ...reactConfigs,
  ...typeScriptConfigs,
  ...importXConfigs,
  jsxA11yConfig,
  nextConfig,
  vitestConfig,
  jestDomPlugin.configs['flat/recommended'],
  unusedImportsConfig,
  storybookConfig,
  eslintConfigPrettier,
);
