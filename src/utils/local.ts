import type { IMenu } from '~/types'

/**
 * 左侧菜单栏
 */
export const localMenus: IMenu[] = [{
  name: '',
  children: [
    { name: '发现音乐', icon: 'music', link: '/discovery' },
    { name: '推荐歌单', icon: 'playlist', link: '/playlist' },
    { name: '最新音乐', icon: 'song', link: '/song' },
  ],
}]
