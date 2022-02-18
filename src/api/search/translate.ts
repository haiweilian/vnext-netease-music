import type { AxiosResponse } from 'axios'
import { SearchType } from '~/utils/constant'
import type { ISong, IPlaylist } from '~/types'

/**
 * 转化搜索，返回的字段和格式不一致，分别单独处理
 */
export const translateSearch = (res: AxiosResponse, type: SearchType) => {
  const { result } = res.data

  if (type === SearchType.single) {
    const songs: ISong[] = result.songs.map((song: any, index: number) => {
      return {
        id: song.id,
        name: song.name,
        order: index + 1,
        picUrl: song.picUrl,
        artists: song.artists.map((ar: any) => ar.name).join('/'),
        album: song.album.name,
        duration: song.duration,
      }
    })
    return {
      songs,
      total: result.songCount,
    }
  } else if (type === SearchType.playlist) {
    const playlists: IPlaylist[] = result.playlists.map((playlist: any, index: number) => {
      return {
        id: playlist.id,
        name: playlist.name,
        order: index + 1,
        picUrl: playlist.coverImgUrl,
        playCount: playlist.playCount,
      }
    })
    return {
      playlists,
      total: result.playlistCount,
    }
  }
}

/**
 * 转化热搜列表
 */
export const translateSearchHot = (res: AxiosResponse): string[] => {
  return res.data.result.hots.map((hot: any) => hot.first)
}
