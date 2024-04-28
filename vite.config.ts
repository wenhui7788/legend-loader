import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
// import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/

// const htmlParams = {
//   // minify: true,
//   pages: [
//     {
//       filename: 'loader', // filename 默认是template文件名，就是beijing.html
//       entry: '/src/loader/main.ts',
//       template: '/src/loader/loader.html'
//     },
//     {
//       filename: 'wallet',
//       entry: '/src/wallet/main.ts',
//       template: '/src/wallet/wallet.html'
//     }
//   ]
// }

export default defineConfig({
  base: './', // 方便打包后预览
  publicDir: 'public', // 默认 public
  plugins: [vue(), VueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    cssCodeSplit: true,
    emptyOutDir: true,
    sourcemap: false,
    assetsDir: 'assets', // 默认 assets
    outDir: 'dist', // 默认 dist
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'src/wallet/index.html')
      }
    }
  }
})
