import { getRequest } from '../request'
import { translateLyric } from './translate'

enum REQUEST_URL {
  Lyric = '/lyric',
}

/**
 * @description: 获取歌词
 */
export const getLyric = (params: {id: number}) => {
  return getRequest(REQUEST_URL.Lyric, params).then(r => r.data)
}
