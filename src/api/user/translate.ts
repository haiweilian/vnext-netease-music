import { AxiosResponse } from 'axios'
import { isEmpty } from '~/utils'
import type { IMenu, IMenuItem } from '~/types'

export const translateUserPlaylist = (res: AxiosResponse) => {
  const playlist = res.data.playlist
  if (isEmpty(playlist)) return []

  const menus: IMenu[] = []
  const menuCreateList: IMenuItem[] = []
  const menuCollectList: IMenuItem[] = []

  // 区分分类、链接、图标
  playlist.forEach((item: IMenuItem) => {
    item.icon = 'playlist'
    item.link = `/playlist/${item.id}`
    if (res.config.params.uid === item.userId) {
      menuCreateList.push(item)
    }
    else {
      menuCollectList.push(item)
    }
  })

  // 处理分类数据结构
  if (menuCreateList.length) {
    menus.push({
      name: '创建的歌单',
      children: menuCreateList,
    })
  }

  if (menuCollectList.length) {
    menus.push({
      name: '收藏的歌单',
      children: menuCollectList,
    })
  }

  return menus
}
