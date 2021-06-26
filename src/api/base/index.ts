import { getRequest } from '../request'

enum REQUEST_URL {
  Banner = '/banner',
}

/**
 * @description: 获取轮播图数据
 */
export interface IBanner {
  imageUrl: string
  encodeId: string
  typeTitle: string
}

export const getBanner = (): Promise<IBanner[]> => {
  return getRequest(REQUEST_URL.Banner).then(r => r.data.banners)
}
