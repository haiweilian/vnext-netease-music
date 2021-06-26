import type { MutationTree } from 'vuex'
import type { IUser, IUserUser } from './state'
import { SET_USER } from './constant'

const mutations: MutationTree<IUser> = {
  [SET_USER](state, payload) {
    state.user = payload as IUserUser
  },
}

export default mutations
