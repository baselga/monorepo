import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // avoid caching the workspace package so rebuilt dist/ files are picked up live
  optimizeDeps: {
    exclude: ['@monorepo/ui'],
  },
});
