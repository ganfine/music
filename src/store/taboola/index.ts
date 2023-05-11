import { defineStore } from 'pinia'
import { fetchTaboolaRequest } from '@/service/taboola/adsense'
import { IState } from './types'
import { localCache } from '@/utils/cache'
import { ALLOW_TABOOLA } from '@/constant/index'

const { getLocalCache, setLocalCache } = localCache

const useTaboolaStore = defineStore('taboola', {
  state: (): IState => {
    return {
      tempList: [],
      taboolaList: [],
      requestCount: 0,
      requestStatus: 'stoped'
    }
  },
  actions: {
    getTaboolaAction(count: number, index: number) {
      if (this.taboolaList.length >= index) {
        return
      }

      if (getLocalCache(ALLOW_TABOOLA) === false) {
        return
      } else if (getLocalCache(ALLOW_TABOOLA) === undefined) {
        setLocalCache(ALLOW_TABOOLA, true)
      }
      this.requestStatus = 'started'
      this.requestCount++
      fetchTaboolaRequest(count)
        .then((res) => {
          this.tempList.push(...res)
        })
        .finally(() => {
          if (this.tempList.length < index && this.requestCount <= index + 2) {
            this.getTaboolaAction(2, index)
          } else {
            this.taboolaList = this.tempList
          }
        })
    },
    // 每次路由切换时调用
    initTaboola() {
      this.requestCount = 0
      this.requestStatus = 'stoped'
      this.tempList = []
      this.taboolaList = []
    }
  }
})

export { useTaboolaStore }
