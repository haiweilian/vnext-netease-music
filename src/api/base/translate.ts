import type { AxiosResponse } from 'axios'
import type { IBanner } from '~/types'

/**
 * 转化 Banner 减少字段
 */
export const translateBanner = (res: AxiosResponse): IBanner[] => {
  const { banners } = res.data

  return banners.map((item: IBanner) => {
    return {
      imageUrl: item.imageUrl,
      encodeId: item.encodeId,
      typeTitle: item.typeTitle,
    }
  })
}
