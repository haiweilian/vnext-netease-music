import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import ElementPlus from 'unplugin-element-plus/vite'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[name]',
    }),
    ElementPlus({}),
  ],
  optimizeDeps: {
    include: ['vue', 'vuex', 'vue-router', '@vueuse/core'],
    exclude: ['vue-demi'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/styles/additional.scss";',
      },
    },
  },
})
