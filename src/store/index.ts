import { createStore } from 'vuex'
import user from './modules/user'
import player from './modules/player'

const store = createStore({
  modules: {
    user,
    player,
  },
})

export default store
