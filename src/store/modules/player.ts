import { defineStore } from 'pinia'
import type { ISong } from '~/types'

export interface IPlayerState {
  currentSong: ISong | null
  lyricPageStatus: boolean
}

export const usePlayerStore = defineStore({
  id: 'player',
  state: (): IPlayerState => ({
    currentSong: null,
    lyricPageStatus: false,
  }),
  actions: {
    setCurrentSong(payload: ISong) {
      this.currentSong = payload
    },
    setLyricPageStatus(payload?: boolean) {
      this.lyricPageStatus = payload === undefined ? !this.lyricPageStatus : payload
    },
  },
})
