import { getRequest } from '../request'
import { translateUserDetail, translateUserPlaylist } from './translate'
import type { IMultiPageConfig } from '~/types'

enum REQUEST_URL {
  UserDetail = '/user/detail',
  UserPlaylist = '/user/playlist',
}

/**
 * @description: 获取用户详情
 */
export const getUserDetail = (params: { uid: string }) => {
  return getRequest(REQUEST_URL.UserDetail, params).then(translateUserDetail)
}

/**
 * @description: 获取用户歌单
 */
export const getUserPlaylist = (params: { uid: string } & IMultiPageConfig) => {
  return getRequest(REQUEST_URL.UserPlaylist, params).then(translateUserPlaylist)
}
