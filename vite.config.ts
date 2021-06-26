import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import svgIcons from 'vite-plugin-svg-icons'
import styleImport from 'vite-plugin-style-import'

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
    svgIcons({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[name]',
    }),
    styleImport({
      libs: [{
        libraryName: 'element-plus',
        esModule: true,
        ensureStyleFile: true,
        resolveStyle: (name) => {
          return `element-plus/lib/theme-chalk/${name}.css`
        },
        resolveComponent: (name) => {
          return `element-plus/lib/${name}`
        },
      }],
    }),
  ],
  optimizeDeps: {
    include: [
      'vue',
      'vuex',
      'vue-router',
      '@vueuse/core',
    ],
    exclude: [
      'vue-demi',
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/styles/additional.scss";',
      },
    },
  },
})
