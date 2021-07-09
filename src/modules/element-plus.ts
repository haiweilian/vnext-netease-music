import type { App } from 'vue'
import 'element-plus/lib/theme-chalk/base.css'

export const install = (app: App) => {
  app.config.globalProperties.$ELEMENT = { size: 'mini' }
}
