import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    mdx({
      jsxImportSource: 'react',
      providerImportSource: false
    }),
    react()
  ],
  build: {
    outDir: 'dist/assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/scripts/main.jsx'),
      },
      output: {
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: 'css/[name]-[hash].[ext]'
      }
    }
  }
});
