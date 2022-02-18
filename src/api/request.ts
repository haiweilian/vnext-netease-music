import axios from 'axios'
import { showError } from './error'
import { showFullScreenLoading, tryHideFullScreenLoading } from './loading'

const http = axios.create({
  baseURL: import.meta.env.VITE_MUSIC_URL,
  withCredentials: false,
})

http.interceptors.request.use(
  (config) => {
    showFullScreenLoading()
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  (response) => {
    tryHideFullScreenLoading()
    return response
  },
  (error) => {
    showError(error)
    tryHideFullScreenLoading()
    return Promise.reject(error)
  }
)

export const getRequest = (url: string, params = {}) => {
  return http.get(url, { params: { ...params } })
}
