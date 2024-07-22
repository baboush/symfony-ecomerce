/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
    alias: {
      '@app/core/components': path.resolve(
        __dirname,
        'src/app/core/components/index.ts',
      ),
      '@app/shared/interfaces': path.resolve(
        __dirname,
        'src/app/shared/interfaces/index.ts',
      ),
      '@app/shared/utils': path.resolve(
        __dirname,
        'src/app/shared/utils/index.ts',
      ),
    },
  },
  plugins: [
    analog({
      vite: { inlineStylesExtension: 'scss' },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    include: ['**/*.spec.ts'],
    reporters: ['default'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
