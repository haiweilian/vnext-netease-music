import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
export * from './constant'

const playerStore = {
  // namespace: true,
  state,
  getters,
  actions,
  mutations,
}

export default playerStore
