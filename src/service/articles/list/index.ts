import { RouteLocationNormalized } from 'vue-router'
import { articlesRequest } from '../index'
import { IArticlesListReq, IArticlesListRes } from './types'

interface IParmas extends IArticlesListReq {
  sub?: string | string[]
  keyword?: string | string[]
}

const fetchArticlesList = (route: RouteLocationNormalized, params: IArticlesListReq) => {
  // 首页不传分类: 1, 不分页的时候undefined   2, 分页的时候 ===home => undefined, !==home category
  const sub = route.params.value !== 'home' ? route.params.value : undefined
  // 首页默认分类 Facts
  // const sub = !route.params.sub || route.params.sub === 'home' ? 'Facts' : route.params.sub
  let _parmas: IParmas

  switch (route.name) {
    case 'contents-sub':
      _parmas = { sub, ...params }
      break
    case 'search-keyword':
      _parmas = { keyword: route.params.value, ...params }
      break
    default:
      _parmas = { sub, ...params }
  }
  return articlesRequest.get<IArticlesListRes>({
    url: '/v1/topic/list',
    params: _parmas
  })
}

export { fetchArticlesList }
