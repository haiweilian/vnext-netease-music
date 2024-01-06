import type { App } from 'vue'
import VueLazyloadNext from 'vue-lazyload'

import Loading from '~/assets/icons/loading-audio.svg'
import Error from '~/assets/icons/loading-error.svg'

export const install = (app: App) => {
  app.use(VueLazyloadNext, {
    error: Error,
    loading: Loading,
  })
}
