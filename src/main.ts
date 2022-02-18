import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import './styles/index.scss'
import 'virtual:svg-icons-register'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

// install all modules under `modules/`
Object.values(import.meta.globEager('./modules/*.ts')).map((i) => i.install?.(app))
