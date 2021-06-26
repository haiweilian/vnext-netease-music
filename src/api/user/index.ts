import { getRequest } from '../request'
import type { IUser } from '~/types'

enum REQUEST_URL {
  UserDetail = '/user/detail',
}

/**
 * @description: 获取用户详情
 */
export const getUserDetail = (uid: string): Promise<IUser> => {
  return getRequest(REQUEST_URL.UserDetail, { uid }).then(r => r.data.profile)
}
