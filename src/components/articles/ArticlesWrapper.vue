<script lang="ts" setup>
import PubPagination from '@/components/pub/pubPagination/PubPagination.vue'
import ArticlesItem from '@/components/articles/ArticlesItem.vue'
import PubAdsense from '../pub/pubAdsense/PubAdsense.vue'

import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useArticlesStore } from '@/store/articles'
import { useRedirect } from '@/hook/route'
import { useToHome } from '@/hook/route'

const { toHome } = useToHome()
const articlesStore = useArticlesStore()
const { fetchArticles } = articlesStore
const { total, list } = storeToRefs(articlesStore)
const route = useRoute()
const { toRedirect } = useRedirect()
fetchArticles(route)

onBeforeRouteUpdate((to) => {
  fetchArticles(to)
})
</script>
<template>
  <div class="articles-wrapper">
    <ul>
      <li v-if="(total || 0) <= 0" class="no-data" @click="toHome()">No data found, click back to home page</li>
      <li v-for="item in list" :key="item.id">
        <ArticlesItem :article="item" @click-event="(value) => toRedirect({ path: 'Middle', query: value })" />
        <PubAdsense :place="'list'" v-if="(item.index || 1) % 3 == 0" :type="'large'"></PubAdsense>
        <hr v-if="(item.index || 1) % 3 == 0" />
      </li>
    </ul>
    <PubPagination
      :list="10"
      :total="total"
      @change-event="(page) => toRedirect({ path: 'category', query: route.params.value as string, page })"
    ></PubPagination>
  </div>
</template>
<style scoped lang="less">
.articles-wrapper {
  padding: 0 20px;
  .no-data {
    margin: 20px 0;
  }
}
hr {
  margin: 16px 0;
}
</style>
