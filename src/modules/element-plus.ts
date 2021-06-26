import type { App } from 'vue'
import { ElIcon } from 'element-plus'

export const install = (app: App) => {
  app.config.globalProperties.$ELEMENT = { size: 'mini' }
  app.use(ElIcon)
}
