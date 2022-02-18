import { isEmpty, thumbnail, padZero, formatCount } from '../index'

describe('test utils', () => {
  test('isEmpty', () => {
    expect(isEmpty(undefined)).toBeTruthy()
    expect(isEmpty(null)).toBeTruthy()
    expect(isEmpty('')).toBeTruthy()
    expect(isEmpty(false)).toBeFalsy()
    expect(isEmpty(0)).toBeFalsy()
  })

  test('thumbnail', () => {
    expect(thumbnail('https://p2.music.126.net/1.png', 100)).toBe('https://p2.music.126.net/1.png?param=100y100')
    expect(thumbnail('https://p2.music.126.net/1.png', 100, 100)).toBe('https://p2.music.126.net/1.png?param=100y100')
    expect(thumbnail('', 100, 100)).toBe(
      'https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg?param=100y100'
    )
  })

  test('padZero', () => {
    expect(padZero(9)).toBe('09')
    expect(padZero(10)).toBe('10')
  })

  test('formatCount', () => {
    expect(formatCount(9999)).toBe(9999)
    expect(formatCount(100000)).toBe(100000)
    expect(formatCount(150000)).toBe('15 万')
  })
})
