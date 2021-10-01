import type { App } from 'vue'

export const install = (app: App) => {
  app.config.globalProperties.$ELEMENT = { size: 'mini' }
}
