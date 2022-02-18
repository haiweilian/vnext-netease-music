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

  const playlists: IMenuItem[] = playlist.map((playlist: any) => {
    return {
      name: playlist.name,
      icon: 'playlist',
      link: `/playlist/${playlist.id}`,
      id: playlist.id,
      userId: playlist.userId,
    }
  })

  /**
   * 因为不是真正的登录，没办法访问 "我喜欢的音乐"，所以删除掉
   */
  playlists.splice(0, 1)

  /**
   * 处理歌单分类
   */
  playlists.forEach((playlist: IMenuItem) => {
    if (res.config.params.uid === playlist.userId) {
      menuCreateList.push(playlist)
    } else {
      menuCollectList.push(playlist)
    }
  })

  /**
   * 处理分类数据结构
   */
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
