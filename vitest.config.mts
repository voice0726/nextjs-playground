/// <reference types="vitest" />
import { resolve } from 'node:path';

import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: 'jsdom',
    globals: true,
    env: dotenv.config({ path: '.env.test' }).parsed,
    server: {
      deps: {
        inline: ['next-auth'],
      },
    },
    setupFiles: resolve(__dirname, 'vitest.setup.mts'),
  },
});
