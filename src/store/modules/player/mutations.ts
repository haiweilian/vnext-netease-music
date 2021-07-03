import type { MutationTree } from 'vuex'
import type { IPlayerState } from './state'
import { SET_CURRENT_SONG, SET_LYRIC_PAGE_STATUS } from './constant'
import type { ISong } from '~/types'

const mutations: MutationTree<IPlayerState> = {
  [SET_CURRENT_SONG](state, payload: ISong) {
    state.currentSong = payload
  },
  [SET_LYRIC_PAGE_STATUS](state, payload: boolean) {
    state.lyricPageStatus = payload === undefined ? !state.lyricPageStatus : payload
  },
}

export default mutations
