import { defineConfig } from 'vite';
import { resolve } from 'path';
import postcssImport from 'postcss-import';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

const opsys = process.platform;
// windows
if (opsys === 'win32' || opsys === 'win64') process.env.BROWSER = 'chrome';
// macOS
if (opsys === 'darwin') process.env.BROWSER = '/Applications/Google Chrome.app';

export default defineConfig({
  root: resolve(__dirname, './src'),
  publicDir: resolve(__dirname, './public'),
  build: {
    emptyOutDir: true,
    outDir: resolve(__dirname, './dist'),
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@assets': resolve(__dirname, './public/assets'),
      '@js': resolve(__dirname, './src/js'),
    },
  },
  server: {
    port: 3000,
  },
  css: {
    postcss: {
      plugins: [postcssImport, tailwindcss, autoprefixer],
    },
  },
  plugins: [
    ViteMinifyPlugin({
      removeComments: true,
    }),
  ],
});
