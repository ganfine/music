import { defineStore } from 'pinia'
import { IState } from './types'
import { fetchArticlesCategories } from '@/service/articles/category'

const useCategoryStore = defineStore('category', {
  state: (): IState => {
    return {
      categories: [],
      requestStatus: 'stoped'
    }
  },
  actions: {
    getCategoriesAction() {
      this.requestStatus = 'started'
      fetchArticlesCategories().then((res) => {
        if (!res.error) {
          this.categories = res.data
        }
      })
    }
  }
})

export { useCategoryStore }
