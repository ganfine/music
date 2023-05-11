import { articlesRequest } from '../index'
import { IArticleDetailReq, IArticleDetailRes } from './types'

const fetchArticlesDetail = (params: IArticleDetailReq) => {
  return articlesRequest.get<IArticleDetailRes>({
    url: '/v1/topic/detail',
    params
  })
}

export { fetchArticlesDetail }
