import type { MutationTree } from 'vuex'
import type { IPlayerState } from './state'
import { SET_PLAYING_STATUS, SET_CURRENT_SONG } from './constant'

const mutations: MutationTree<IPlayerState> = {
  [SET_PLAYING_STATUS](state, payload: boolean) {
    state.playingStatus = payload
  },
  [SET_CURRENT_SONG](state, payload: any) {
    state.currentSong = payload
  },
}

export default mutations
