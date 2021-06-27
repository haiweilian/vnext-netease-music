/**
 * 分页查询
 */
export interface IMultiPageConfig {
  limit?: string | number
  offset?: string | number
}

/**
 * 分页查询，需要用到上次最后一项的时间戳
 */
export interface IMultiPageBeforeConfig {
  limit?: string | number
  before?: string | number
}

/**
 * 切换筛选
 */
export interface ISingleTab {
  label: string | number
  value: string | number
}

/**
 * 首页 Banner
 */
export interface IBanner {
  imageUrl: string
  encodeId: string
  typeTitle: string
}

/**
 * 用户登录信息
 */
export interface IUser {
  userId: string
  nickname: string
  avatarUrl: string
}

/**
 * 菜单项信息
 */
export interface IMenuItem {
  name: string
  icon: string
  link: string
  id?: string | number
  userId?: string | number
}

/**
 * 菜单分类列表
 */
export interface IMenu {
  name: string
  children: IMenuItem[]
}

/**
 * 歌单详情
 */
export interface IPlaylist {
  id: string
  name: string
  order: number
  picUrl: string
  playCount: string | number
  copywriter?: string
  description?: string
}

/**
 * 歌曲详情
 */
export interface ISong {
  id: string
  name: string
  order: number
  picUrl: string
  artists: string
  album: string
  duration: string | number
}
