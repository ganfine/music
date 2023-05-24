import { defineStore } from 'pinia'
import { IArticleDetail } from '@/types/articleDetail'
import { fetchArticlesDetail } from '@/service/articles/detail'
import { RouteLocationNormalized } from 'vue-router'
import { replaceStr } from '@/utils/replaceStr/index'

import { getTimeStr } from '@/utils/time/index'

const useDetailStore = defineStore('detail', {
  state: (): IArticleDetail => {
    return {
      id: 0,
      categories: '',
      sub_categories: '',
      slug: '',
      title: '',
      cover: '',
      via: '',
      author: '',
      tags: '',
      summary: '',
      published_at: '',
      paragraphs: [
        {
          id: 0,
          raw_id: 0,
          topic_id: 0,
          heading: '',
          image: '',
          via: '',
          content: '',
          contents: [],
          index: 0,
          url: ''
        }
      ]
    }
  },
  actions: {
    fetchDetail(route: RouteLocationNormalized) {
      fetchArticlesDetail({ slug: route.params.slug as string }).then((res) => {
        this.id = res.data.id
        this.categories = res.data.categories
        this.sub_categories = res.data.sub_categories
        this.slug = res.data.slug
        this.title = res.data.title
        this.cover = res.data.cover
        this.via = res.data.via
        this.author = res.data.author
        this.tags = res.data.tags
        this.summary = res.data.summary
        this.published_at = getTimeStr(parseInt(res.data.published_at))
        this.paragraphs = res.data.paragraphs
        for (let i = 0; i < this.paragraphs.length; i++) {
          this.paragraphs[i].index = i
          if (this.paragraphs[i]?.content) {
            this.paragraphs[i].contents = replaceStr(this.paragraphs[i].content.replace(/(^"|"$)/g, ''), {
              '\\n': '---',
              '\\"': '"',
              '""': '"',
              '\\t': ''
            }).split(/-{3,}/)
          }
        }
      })
    }
  }
})

export { useDetailStore }
