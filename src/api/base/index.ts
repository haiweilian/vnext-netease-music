import { getRequest } from '../request'
import type { IBanner } from '~/types'

enum REQUEST_URL {
  Banner = '/banner',
}

/**
 * @description: 获取轮播图数据
 */
export const getBanner = (): Promise<IBanner[]> => {
  return getRequest(REQUEST_URL.Banner).then(r => r.data.banners)
}
