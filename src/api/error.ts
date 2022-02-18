import { ElMessage } from 'element-plus'

export function showError(msg: any) {
  if (msg.response) {
    ElMessage.error(msg.response.data.message)
  } else {
    ElMessage.error(msg)
  }
}
