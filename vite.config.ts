import path from 'path';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite(), svgrPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 8080,
  },
});
