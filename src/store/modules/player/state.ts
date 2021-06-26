export interface IPlayerState {
  playingStatus: boolean
  currentIndex: number
  currentSong: any
}

const state: IPlayerState = {
  playingStatus: false,
  currentIndex: -1,
  currentSong: null,
}

export default state
