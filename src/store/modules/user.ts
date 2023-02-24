import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { ElMessage } from 'element-plus'
import { isEmpty } from '~/utils'
import { GLOBAL_UID_KEY } from '~/utils/constant'
import { getUserDetail } from '~/api/user'
import type { IUser } from '~/types'

const storage = useStorage(GLOBAL_UID_KEY, '')

export interface IUserState {
  user: IUser | null
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): IUserState => ({
    user: null,
  }),
  actions: {
    async login(uid: string) {
      const error = () => {
        ElMessage.error('登录失败，请输入正确的uid。')
        return false
      }

      if (isEmpty(uid)) {
        return error()
      }

      try {
        const user = await getUserDetail({ uid })

        if (user) {
          this.user = user
          storage.value = user.userId
        } else {
          return error()
        }

        return true
      } catch (e) {
        return error()
      }
    },
    async logout() {
      this.user = null
      storage.value = ''
      return true
    },
  },
})
