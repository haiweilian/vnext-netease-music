export interface IUserUser {
  userId: number
  nickname: string
  avatarUrl: string
}

export interface IUser {
  user: IUserUser
}

const state: IUser = {
  user: {} as IUserUser,
}

export default state
