import type { ISong } from '~/types'

export interface IPlayerState {
  currentSong: ISong
  lyricPageStatus: boolean
}

const state: IPlayerState = {
  currentSong: {} as ISong,
  lyricPageStatus: false,
}

export default state
