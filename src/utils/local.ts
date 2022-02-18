import type { IMenu, ISingleTab } from '~/types'

/**
 * 左侧菜单栏
 */
export const localMenus: IMenu[] = [
  {
    name: '',
    children: [
      { name: '发现音乐', icon: 'music', link: '/discovery' },
      { name: '推荐歌单', icon: 'playlist', link: '/playlist' },
      { name: '最新音乐', icon: 'song', link: '/song' },
    ],
  },
]

/**
 * 歌单分类
 */
export const localPlaylistTabs: ISingleTab[] = [
  { value: '全部', label: '全部' },
  { value: '欧美', label: '欧美' },
  { value: '华语', label: '华语' },
  { value: '流行', label: '流行' },
  { value: '说唱', label: '说唱' },
  { value: '摇滚', label: '摇滚' },
  { value: '民谣', label: '民谣' },
  { value: '电子', label: '电子' },
  { value: '轻音乐', label: '轻音乐' },
  { value: 'ACG', label: 'ACG' },
  { value: '怀旧', label: '怀旧' },
  { value: '治愈', label: '治愈' },
  { value: '旅行', label: '旅行' },
]

/**
 * 歌曲分类
 */
export const localSongTabs: ISingleTab[] = [
  { label: '全部', value: 0 },
  { label: '华语', value: 7 },
  { label: '欧美', value: 96 },
  { label: '日本', value: 8 },
  { label: '韩国', value: 16 },
]
