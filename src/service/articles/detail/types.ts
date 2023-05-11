import { IArticleDetail } from '@/types/articleDetail'

interface IArticleDetailReq {
  id?: string | string[]
  slug?: string | string[]
}

interface IArticleDetailRes {
  success: 'OK'
  error?: string
  data: IArticleDetail
}

export { IArticleDetailReq, IArticleDetailRes }
