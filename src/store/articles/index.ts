import { defineStore } from 'pinia'
import { IArticlesList } from '@/types/articlesList'
import { fetchArticlesList } from '@/service/articles/list'
import { RouteLocationNormalized } from 'vue-router'
import { getTimeStr } from '@/utils/time/index'

const useArticlesStore = defineStore('articles', {
  state: (): IArticlesList => {
    return {
      total: 1000,
      list: []
    }
  },
  actions: {
    fetchArticles(route: RouteLocationNormalized) {
      const page = route.params.page as string
      const limit = 10
      const offset = (parseInt(page.replace(/\D/g, '')) - 1) * limit

      fetchArticlesList(route, { limit, offset }).then((res) => {
        this.total = res.data.total
        this.list = res.data.list
        for (let i = 0; i <= res.data.list.length; i++) {
          if (res.data.list[i]?.published_at) {
            res.data.list[i].published_at = getTimeStr(parseInt(res.data.list[i].published_at))
            this.list[i].index = i + 1
          }
        }
      })
    }
  }
})

export { useArticlesStore }
