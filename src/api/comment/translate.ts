import type { AxiosResponse } from 'axios'
import { CommentTrans } from './index'
import type { IComment } from '~/types'

/**
 * 转化评论数据，提取字段、处理回复格式
 * 资源评论 和 热门评论 数据结构一致，返回体不一致，需要判断取不同的值
 */
export const translateComment = (res: AxiosResponse, type: CommentTrans) => {
  let data = res.data
  let total: any = 0
  let cursor: any = ''
  let comments: any = []

  if (type === CommentTrans.Hot) {
    total = data.total
    cursor = data.cursor
    comments = data.hotComments
  } else if (type === CommentTrans.New) {
    data = data.data
    total = data.totalCount
    cursor = data.cursor
    comments = data.comments
  }

  const transComments: IComment[] = comments.map((comment: any) => {
    return {
      id: comment.commentId,
      nickname: comment.user.nickname,
      avatarUrl: comment.user.avatarUrl,
      content: comment.content,
      time: comment.time,
      likedCount: comment.likedCount,
      repliedNickname: comment.beReplied?.[0]?.user.nickname,
      repliedContent: comment.beReplied?.[0]?.content,
    }
  })

  return {
    total: total as number,
    cursor: cursor as string,
    comments: transComments,
  }
}
