import type { AxiosResponse } from 'axios'
import type { IUser, IMenu, IMenuItem } from '~/types'

/**
 * 转化用户信息，数据平级
 */
export const translateUserDetail = (res: AxiosResponse): IUser => {
  const { profile } = res.data

  return {
    userId: profile.userId,
    nickname: profile.nickname,
    avatarUrl: profile.avatarUrl,
  }
}

/**
 * 转化用户歌单，处理创建和收藏分类、以及图标、路径处理
 */
export const translateUserPlaylist = (res: AxiosResponse): IMenu[] => {
  const { playlist } = res.data

  const menus: IMenu[] = []
  const menuCreateList: IMenuItem[] = []
  const menuCollectList: IMenuItem[] = []

  // 区分分类、链接、图标
  playlist.forEach((playlist: IMenuItem) => {
    playlist.icon = 'playlist'
    playlist.link = `/playlist/${playlist.id}`
    if (res.config.params.uid === playlist.userId) {
      menuCreateList.push(playlist)
    }
    else {
      menuCollectList.push(playlist)
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
