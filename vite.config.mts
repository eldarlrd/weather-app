import { defineConfig } from 'vite';

// https://vitejs.dev/config
export default defineConfig({
  base: '/weather-app/',
  resolve: {
    alias: { '@': '/src' }
  }
});