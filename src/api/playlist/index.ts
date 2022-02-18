import { getRequest } from '../request'
import {
  translatePersonalizedPlaylist,
  translatePersonalizedNewsong,
  translateTopPlaylist,
  translateTopSong,
  translatePlaylistDetail,
} from './translate'
import type { IMultiPageConfig, IMultiPageBeforeConfig } from '~/types'

enum REQUEST_URL {
  PersonalizedPlaylist = '/personalized',
  PersonalizedNewsong = 'personalized/newsong',
  TopPlaylist = '/top/playlist',
  TopPlaylistHighquality = '/top/playlist/highquality',
  TopSong = 'top/song',
  PlaylistDetail = '/playlist/detail',
  SongDetail = '/song/detail',
}

/**
 * @description: 获取推荐歌单
 */
export const getPersonalizedPlaylist = (params?: { limit?: number }) => {
  return getRequest(REQUEST_URL.PersonalizedPlaylist, params).then(translatePersonalizedPlaylist)
}

/**
 * @description: 获取推荐新音乐
 */
export const getPersonalizedNewsong = (params?: { limit?: number }) => {
  return getRequest(REQUEST_URL.PersonalizedNewsong, params).then(translatePersonalizedNewsong)
}

/**
 * @description: 获取网友精选碟歌单
 */
export const getTopPlaylist = (params?: { order?: string; cat?: string | number } & IMultiPageConfig) => {
  return getRequest(REQUEST_URL.TopPlaylist, params).then(translateTopPlaylist)
}

/**
 * @description: 获取推荐中的精品歌单
 */
export const getTopPlaylistHighquality = (params?: { cat?: string } & IMultiPageBeforeConfig) => {
  return getRequest(REQUEST_URL.TopPlaylistHighquality, params).then(translateTopPlaylist)
}

/**
 * @description: 获取获取新歌速递
 */
export const getTopSong = (params: { type: string | number }) => {
  return getRequest(REQUEST_URL.TopSong, params).then(translateTopSong)
}

/**
 * @description: 获取歌单详情
 */
export const getPlaylistDetail = (params: { id: string; s?: string }) => {
  return getRequest(REQUEST_URL.PlaylistDetail, params).then(translatePlaylistDetail)
}

/**
 * @description: 获取歌曲详情
 */
export const getSongDetail = (params: { ids: string }) => {
  return getRequest(REQUEST_URL.SongDetail, params)
}
