import { createStore, createLogger } from 'vuex'
import user from './modules/user'
import player from './modules/player'

const debug = import.meta.env.DEV

const store = createStore({
  modules: {
    user,
    player,
  },
  plugins: debug ? [createLogger()] : [],
})

export default store
