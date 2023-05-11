<script lang="ts" setup>
import MiddleItem from './MiddleItem.vue'
import PubAdsense from '@/components/pub/pubAdsense/PubAdsense.vue'
import PubNews from '../pub/pubNews/PubNews.vue'
import { useRoute } from 'vue-router'
import { useDetailStore } from '@/store/detail/index'
import { useRedirect } from '@/hook/route'
import { storeToRefs } from 'pinia'

const route = useRoute()

const { toRedirect } = useRedirect()
const DetailStore = useDetailStore()
const { fetchDetail } = DetailStore
const { cover, title, author, published_at, paragraphs, slug, summary } = storeToRefs(DetailStore)
fetchDetail(route)
</script>
<template>
  <div class="detail">
    <MiddleItem
      :cover="cover"
      :title="title"
      :author="author"
      :published_at="published_at"
      :summary="summary"
      :paragraphs="paragraphs"
      @click-event="() => toRedirect({ path: 'detail', query: slug })"
    >
      <template #adsense> <PubAdsense :place="'middle'" :type="'large'" /> </template
    ></MiddleItem>
    <PubNews></PubNews>
  </div>
</template>
<style lang="less" scoped>
.detail {
  padding: 15px 20px 30px 20px;
  box-sizing: border-box;
  min-height: 100vh;
}
</style>
