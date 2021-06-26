import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
export * from './state'
export * from './constant'

const userStore = {
  namespace: true,
  state,
  getters,
  actions,
  mutations,
}

export default userStore
