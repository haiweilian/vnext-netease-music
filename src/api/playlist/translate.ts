import type { AxiosResponse } from 'axios'
import type { IPlaylist, ISong, IPlaylistDetail } from '~/types'
import { getSongDetail } from './index'

/**
 * 转化推荐歌单，标准化字段、转换字段格式
 */
export const translatePersonalizedPlaylist = (res: AxiosResponse): IPlaylist[] => {
  const { result } = res.data

  return result.map((playlist: any, index: number) => {
    return {
      id: playlist.id,
      name: playlist.name,
      order: index + 1,
      picUrl: playlist.picUrl,
      playCount: playlist.playCount,
      copywriter: playlist.copywriter,
    }
  })
}

/**
 * 转化推荐歌曲，标准化字段、数据平级、转换字段格式
 */
export const translatePersonalizedNewsong = (res: AxiosResponse): ISong[] => {
  const { result } = res.data

  return result.map((song: any, index: number) => {
    return {
      id: song.id,
      name: song.name,
      order: index + 1,
      picUrl: song.picUrl,
      artists: song.song.artists.map((ar: any) => ar.name).join('/'),
      album: song.song.album.name,
      duration: song.song.duration,
    }
  })
}

/**
 * 转化网友精选碟歌单，标准化字段、数据平级、转换字段格式
 */
export const translateTopPlaylist = (res: AxiosResponse) => {
  const { playlists, total, more } = res.data

  const transPlaylists: IPlaylist[] = playlists.map((playlist: any, index: number) => {
    return {
      id: playlist.id,
      name: playlist.name,
      order: index + 1,
      picUrl: playlist.coverImgUrl,
      playCount: playlist.playCount,
      description: playlist.description,
    }
  })

  return {
    total: total as number,
    more: more as boolean,
    playlists: transPlaylists,
  }
}

/**
 * 转化新歌速递，标准化字段、数据平级、转换字段格式
 */
export const translateTopSong = (res: AxiosResponse): ISong[] => {
  const { data } = res.data

  return data.map((song: any, index: number) => {
    return {
      id: song.id,
      name: song.name,
      order: index + 1,
      picUrl: song.album.picUrl,
      artists: song.artists.map((ar: any) => ar.name).join('/'),
      album: song.album.name,
      duration: song.duration,
    }
  })
}

/**
 * 转化歌单详情，处理歌单详情不能获取详情，再次调用歌曲查询
 */
export const translatePlaylistDetail = async (res: AxiosResponse): Promise<IPlaylistDetail> => {
  const { playlist } = res.data
  const { tags, creator, trackIds } = playlist
  const ids = trackIds.map((track: any) => track.id).join(',')

  /**
   * 先请求歌单获取歌单下所有的 trackIds，再请求歌曲详情。
   * https://neteasecloudmusicapi.vercel.app/#/?id=获取歌单详情
   */
  const { data } = await getSongDetail({ ids })
  const transSongs: ISong[] = data.songs.map((song: any, index: number) => {
    return {
      id: song.id,
      name: song.name,
      order: index + 1,
      picUrl: song.al.picUrl,
      artists: song.ar.map((ar: any) => ar.name).join('/'),
      album: song.al.name,
      duration: song.dt,
    }
  })

  return {
    id: playlist.id,
    name: playlist.name,
    createTime: playlist.createTime,
    coverImgUrl: playlist.coverImgUrl,
    description: playlist.description,
    avatarUrl: creator.avatarUrl,
    nickname: creator.nickname,
    commentCount: playlist.commentCount,
    tags: tags.join('/'),
    songs: transSongs,
  }
}
