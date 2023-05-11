import { IArticlesList } from '@/types/articlesList'

export interface IDiscoverReq {
  size: number
}

export interface IDiscoverRes {
  success: string
  data: IArticlesList
  error?: string
}
