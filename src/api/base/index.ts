import { getRequest } from '../request'
import { translateBanner } from './translate'

enum REQUEST_URL {
  Banner = '/banner',
}

/**
 * @description: 获取轮播图数据
 */
export const getBanner = () => {
  return getRequest(REQUEST_URL.Banner).then(translateBanner)
}
