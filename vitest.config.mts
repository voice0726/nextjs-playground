/// <reference types="vitest" />
import { resolve } from 'node:path';

import react from '@vitejs/plugin-react';
import wyw from '@wyw-in-js/vite';
import { config } from 'dotenv';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    wyw({
      include: ['**/*.{ts,tsx}'],
      babelOptions: {
        presets: ['@babel/preset-typescript', '@babel/preset-react'],
      },
    }),
  ],
  test: {
    coverage: {
      enabled: true,
      provider: 'v8',
      include: ['src/**/*.{ts,tsx}'],
    },
    environment: 'jsdom',
    globals: true,
    env: config({ path: '.env.test' }).parsed,
    server: {
      deps: {
        inline: ['next-auth'],
      },
    },
    setupFiles: resolve(__dirname, 'vitest.setup.mts'),
    typecheck: {
      tsconfig: resolve(__dirname, 'tsconfig.test.json'),
    },
  },
});
