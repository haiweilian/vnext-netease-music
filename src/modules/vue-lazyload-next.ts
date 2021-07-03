import type { App } from 'vue'
import VueLazyloadNext from 'vue-lazyload-next'

import Error from '~/assets/icons/loading-error.svg'
import Loading from '~/assets/icons/loading-audio.svg'

export const install = (app: App) => {
  app.use(VueLazyloadNext, {
    error: Error,
    loading: Loading,
  })
}
