import type { MutationTree } from 'vuex'
import { SET_USER } from './constant'

import type { IUserState } from './state'
import type { IUser } from '~/types'

const mutations: MutationTree<IUserState> = {
  [SET_USER](state, payload: IUser) {
    state.user = payload
  },
}

export default mutations
