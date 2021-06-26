import type { IUser } from '~/types'

export interface IUserState {
  user: IUser
}

const state: IUserState = {
  user: {} as IUser,
}

export default state
