import { useStorage } from '@vueuse/core'
import { ElMessage } from 'element-plus'
import type { ActionTree } from 'vuex'

import { SET_LOGIN, SET_LOGOUT, SET_USER } from './constant'
import type { IUserState } from './state'

import { isEmpty } from '~/utils'
import { GLOBAL_UID_KEY } from '~/utils/constant'
import { getUserDetail } from '~/api/user'

const storage = useStorage(GLOBAL_UID_KEY, '')

const actions: ActionTree<IUserState, IUserState> = {
  async [SET_LOGIN]({ commit }, uid: string) {
    const error = () => {
      ElMessage.error('登录失败，请输入正确的uid。')
      return false
    }

    if (isEmpty(uid)) {
      return error()
    }

    try {
      const profile = await getUserDetail(uid)

      if (profile) {
        commit(SET_USER, profile)
        storage.value = profile.userId
      }
      else {
        return error()
      }

      return true
    }
    catch (e) {
      return error()
    }
  },
  [SET_LOGOUT]({ commit }) {
    commit(SET_USER, {})
    storage.value = ''
    return true
  },
}

export default actions
