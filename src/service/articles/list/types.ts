import { IArticlesList } from '@/types/articlesList'

interface IArticlesListReq {
  limit?: number
  offset?: number
}

interface IArticlesListRes {
  success: 'OK'
  error?: string
  data: IArticlesList
}

export { IArticlesListReq, IArticlesListRes }
