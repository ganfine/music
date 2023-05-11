import { articlesRequest } from '../index'
import { ICategoryRes } from './types'

const fetchArticlesCategories = () =>
  articlesRequest.get<ICategoryRes>({
    url: '/v1/topic/subs'
  })

export { fetchArticlesCategories }
