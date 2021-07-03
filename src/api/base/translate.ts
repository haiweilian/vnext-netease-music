import type { AxiosResponse } from 'axios'
import type { IBanner } from '~/types'

/**
 * 转化 Banner 减少字段
 */
export const translateBanner = (res: AxiosResponse): IBanner[] => {
  const { banners } = res.data

  return banners.map((banner: IBanner) => {
    return {
      url: banner.url,
      imageUrl: banner.imageUrl,
      typeTitle: banner.typeTitle,
    }
  })
}
