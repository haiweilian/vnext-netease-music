/**
 * see https://github.com/haiweilian/blog/blob/master/PlugIn/2020-05-04.md
 */
import { ElLoading } from 'element-plus'
import type { ILoadingInstance } from 'element-plus/packages/loading/src/loading.type'

let needLoadingRequestCount = 0
let loading: ILoadingInstance

function startLoading() {
  loading = ElLoading.service({
    lock: true,
    fullscreen: true,
    text: '正在加载资源...',
    background: 'rgba(255, 255, 255, 0.3)',
  })
}

function endLoading() {
  loading.close()
}

function tryCloseLoading() {
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}

export function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}

export function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    setTimeout(() => {
      tryCloseLoading()
    }, 100)
  }
}
