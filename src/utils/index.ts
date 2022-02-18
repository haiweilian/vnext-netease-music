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
  if (url) {
    return `${url}?param=${w}y${h}`
  } else {
    return `https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg?param=${w}y${h}`
  }
}

/**
 * 不足十补零
 */
export function padZero(value: number) {
  return value < 10 ? `0${value}` : `${value}`
}

/**
 * 数量转换单位
 */
export function formatCount(value: number) {
  return value > 100000 ? `${Math.round(value / 10000)} 万` : value
}
