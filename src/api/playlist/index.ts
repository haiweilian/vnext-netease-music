import { getRequest } from '../request'
import {
  translatePersonalizedPlaylist,
  translatePersonalizedNewsong,
  translateTopPlaylist,
} from './translate'
import type { IMultiPageConfig, IMultiPageBeforeConfig } from '~/types'

enum REQUEST_URL {
  PersonalizedPlaylist = '/personalized',
  PersonalizedNewsong = 'personalized/newsong',
  TopPlaylist = '/top/playlist',
  TopPlaylistHighquality = '/top/playlist/highquality',
  TopSong = 'top/song'
}

/**
 * @description: 获取推荐歌单
 */
export const getPersonalizedPlaylist = (limit?: number) => {
  return getRequest(REQUEST_URL.PersonalizedPlaylist, { limit }).then(translatePersonalizedPlaylist)
}

/**
 * @description: 获取推荐新音乐
 */
export const getPersonalizedNewsong = (limit?: number) => {
  return getRequest(REQUEST_URL.PersonalizedNewsong, { limit }).then(translatePersonalizedNewsong)
}

/**
 * @description: 获取网友精选碟歌单
 */
export const getTopPlaylist = (params?: {order?: string; cat?: string | number} & IMultiPageConfig) => {
  return getRequest(REQUEST_URL.TopPlaylist, params).then(translateTopPlaylist)
}

/**
 * @description: 获取推荐中的精品歌单
 */
export const getTopPlaylistHighquality = (params?: {cat?: string} & IMultiPageBeforeConfig) => {
  return getRequest(REQUEST_URL.TopPlaylistHighquality, params).then(translateTopPlaylist)
}

/**
 * @description: 获取获取新歌速递
 */
export const getTopSong = () => {
  return getRequest(REQUEST_URL.TopSong).then(r => r.data)
}
