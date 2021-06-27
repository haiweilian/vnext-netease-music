/**
 * 是否为空
 */
export function isEmpty(value: any) {
  return value === undefined || value === null || value === ''
}

/**
 * 控制图片尺寸
 * @example http://p4.music.126.net/JzNK4a5PjjPIXAgVlqEc5Q==/109951164154280311.jpg?param=200y200
 */
export function thumbnail(url: string, w: number, h: number = w) {
  return `${url}?param=${w}y${h}`
}
