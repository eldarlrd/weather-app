import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config
export default defineConfig({
  base: '/weather-app/',
  resolve: { alias: { '@': '/src' } },
  plugins: [
    VitePWA({
      srcDir: 'src',
      filename: 'sw.ts',
      manifest: false,
      injectRegister: null,
      registerType: 'autoUpdate',
      strategies: 'injectManifest',
      injectManifest: {
        globPatterns: ['**/*.{html,js,png,avif,woff2,webmanifest}']
      }
    })
  ]
});