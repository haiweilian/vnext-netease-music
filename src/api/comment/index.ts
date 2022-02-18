import { getRequest } from '../request'
import { translateComment } from './translate'
import { CommentType } from '~/utils/constant'
import type { IMultiPageBeforeConfig } from '~/types'

enum REQUEST_URL {
  CommentHot = '/comment/hot',
  CommentNew = '/comment/new',
}

export enum CommentTrans {
  Hot = 'hot',
  New = 'new',
}

export interface ICommentNewParams {
  id: string | number
  type: CommentType
  pageNo?: number
  pageSize?: number
  sortType?: number
  cursor?: string
}

export interface ICommentHotParams extends IMultiPageBeforeConfig {
  id: string | number
  type: CommentType
}

/**
 * @description: 查询对应资源的评论
 */
export const getCommentNew = (params: ICommentNewParams) => {
  return getRequest(REQUEST_URL.CommentNew, params).then((res) => translateComment(res, CommentTrans.New))
}

/**
 * @description: 查询对应资源热门评论
 */
export const getCommentHot = (params: ICommentHotParams) => {
  return getRequest(REQUEST_URL.CommentHot, params).then((res) => translateComment(res, CommentTrans.Hot))
}
