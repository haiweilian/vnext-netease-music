import { getRequest } from '../request'

enum REQUEST_URL {
  Banner = '/banner',
}

/**
 * @description: 获取轮播图数据
 */
export const getBanner = () => {
  return getRequest(REQUEST_URL.Banner).then(r => r.data.banners)
}
