import { articlesRequest } from '../index'
import { IDiscoverReq, IDiscoverRes } from './types'

const fetchDiscoverList = (params: IDiscoverReq) =>
  articlesRequest.get<IDiscoverRes>({
    url: '/v1/topic/discover',
    params
  })

export { fetchDiscoverList }
