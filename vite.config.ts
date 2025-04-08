import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 5000, // added port number
    proxy: {
      '^/.*': {
        target: 'http://localhost:$PORT',
        rewrite: () => '/'
      }
    }
  }
});