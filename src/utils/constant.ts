/**
 * 全局用户标识名称
 */
export const GLOBAL_UID_KEY = 'vnext-netease-music-uid'

/**
 * 全局搜索历史
 */
export const GLOBAL_SEARCH_HOT_KEY = 'vnext-netease-music-search-hot'

/**
 * 订阅/取消订阅
 * 1: 订阅、0: 取消
 */
export enum SubAction {
  sub = '1',
  unsub = '0',
}

/**
 * 评论类型
 * 0: 歌曲、1: mv、2: 歌单、3: 专辑、4: 电台、5: 视频、6: 动态
 */
export enum CommentType {
  song = '0',
  mv = '1',
  playlist = '2',
  album = '3',
  dj = '4',
  video = '5',
  event = '6',
}

/**
 * 搜索类型
 * 1: 单曲、 10: 专辑、 100: 歌手、 1000: 歌单、 1002: 用户、 1004: MV、 1006: 歌词、 1009: 电台、 1014: 视频
 */
export enum SearchType {
  single = '1',
  album = '10',
  artist = '100',
  playlist = '1000',
  user = '1002',
  mv = '1004',
  lyric = '1006',
  dj = '1009',
  video = '1014',
  complex = '1018',
}
