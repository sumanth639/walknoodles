import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1600,
    outDir: 'dist',
    minify: 'terser',
    manifest: true,
    cssMinify: 'terser',
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'js/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),

    // Inject meta info
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'WalkiNoodle',
          description: 'Healthy and tasty noodles brand — WalkiNoodle',
        },
      },
    }),

    // Node polyfills for browser
    nodePolyfills({
      include: ['crypto'],
      globals: { Buffer: true, global: true, process: true },
    }),

    // Optimize images during build
    ViteImageOptimizer({
      includePublic: true,
      logStats: true,
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupNumericValues: false,
                removeViewBox: false,
              },
              cleanupIDs: {
                minify: false,
                remove: false,
              },
              convertPathData: false,
            },
          },
          'sortAttrs',
          {
            name: 'addAttributesToSVGElement',
            params: {
              attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
            },
          },
        ],
      },
      cache: true,
      cacheLocation: 'node_modules/.cache/vite-plugin-image-optimizer',
    }),
  ],
  optimizeDeps: {
    force: true,
    esbuildOptions: { loader: { '.js': 'jsx' } },
  },
});
