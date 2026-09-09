import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      allowedHosts: 'all',
      // HMR is disabled in AI Studio via DISABLE_HMR env v...
      // Do not modify—file watching is disabled to prever...
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
