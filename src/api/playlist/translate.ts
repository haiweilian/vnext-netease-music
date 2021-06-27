import type { AxiosResponse } from 'axios'
import type { IPlaylist, ISong } from '~/types'

/**
 * 转化推荐歌单，标准化字段、转换字段格式
 */
export const translatePersonalizedPlaylist = (res: AxiosResponse): IPlaylist[] => {
  const { result } = res.data

  return result.map((item: any, index: number) => {
    return {
      id: item.id,
      name: item.name,
      order: index + 1,
      picUrl: item.picUrl,
      playCount: item.playCount,
      copywriter: item.copywriter,
    }
  })
}

/**
 * 转化推荐歌曲，标准化字段、数据平级、转换字段格式
 */
export const translatePersonalizedNewsong = (res: AxiosResponse): ISong[] => {
  const { result } = res.data

  return result.map((item: any, index: number) => {
    return {
      id: item.id,
      name: item.name,
      order: index + 1,
      picUrl: item.picUrl,
      artists: item.song.artists.map((ar: any) => ar.name).join('/'),
      album: item.song.album.name,
      duration: item.song.duration,
    }
  })
}

/**
 * 转化网友精选碟歌单，标准化字段、数据平级、转换字段格式
 */
export const translateTopPlaylist = (res: AxiosResponse) => {
  const { playlists, total, more } = res.data

  const transPlaylists: IPlaylist[] = playlists.map((item: any, index: number) => {
    return {
      id: item.id,
      name: item.name,
      order: index + 1,
      picUrl: item.coverImgUrl,
      playCount: item.playCount,
      description: item.description,
    }
  })

  return {
    total: total as number,
    more: more as boolean,
    playlists: transPlaylists,
  }
}
