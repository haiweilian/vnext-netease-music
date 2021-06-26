export function isUndef(value: any) {
  return value === undefined || value === null
}

export function isDef(value: any) {
  return value !== undefined && value !== null
}

export function isTrue(value: any) {
  return value === true
}

export function isFalse(value: any) {
  return value === false
}
