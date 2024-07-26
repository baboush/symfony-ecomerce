/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';
import basicSsl from '@vitejs/plugin-basic-ssl';
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
      '@app/core/models/entities': path.resolve(
        __dirname,
        'src/app/core/models/entities/index.ts',
      ),

      '@app/core/services': path.resolve(
        __dirname,
        'src/app/core/services/index.ts',
      ),
      '@app/core/interceptors': path.resolve(
        __dirname,
        'src/app/core/interceptors/index.ts',
      ),
      '@app/shared/interfaces': path.resolve(
        __dirname,
        'src/app/shared/interfaces/index.ts',
      ),
      '@app/shared/utils': path.resolve(
        __dirname,
        'src/app/shared/utils/index.ts',
      ),
      '@app/services': path.resolve(__dirname, 'src/app/services/index.ts'),
      '@app/features/auth/components': path.resolve(
        __dirname,
        'src/app/features/auth/components/index.ts',
      ),
    },
  },
  plugins: [
    analog({
      vite: { inlineStylesExtension: 'scss' },
    }),
    basicSsl({
      name: 'test',
      domains: ['https://localhost:8000'],
      certDir: '../../../Php/e-commerce/front/cert.pem',
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
