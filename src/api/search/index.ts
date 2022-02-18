import { getRequest } from '../request'
import { translateSearch, translateSearchHot } from './translate'
import { SearchType } from '~/utils/constant'
import type { IMultiPageConfig } from '~/types'

enum REQUEST_URL {
  Search = '/search',
  SearchHot = '/search/hot',
}

export interface ISearchParams extends IMultiPageConfig {
  keywords: string
  type: SearchType
}

/**
 * @description: 获取资源搜索
 */
export const getSearch = (params: ISearchParams) => {
  return getRequest(REQUEST_URL.Search, params).then((res) => translateSearch(res, params.type))
}

/**
 * @description: 获取热搜简略列表
 */
export const getSearchHot = () => {
  return getRequest(REQUEST_URL.SearchHot).then(translateSearchHot)
}
