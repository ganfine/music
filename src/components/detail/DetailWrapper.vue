<script lang="ts" setup>
import DetailItem from './DetailItem.vue'
import FooterItem from '../footer/FooterItem.vue'
import PubAdsense from '../pub/pubAdsense/PubAdsense.vue'

import { useRoute } from 'vue-router'
import { useDetailStore } from '@/store/detail/index'
import { storeToRefs } from 'pinia'
const route = useRoute()

const DetailStore = useDetailStore()
const { fetchDetail } = DetailStore
const { cover, title, author, published_at, paragraphs, summary } = storeToRefs(DetailStore)
fetchDetail(route)
</script>
<template>
  <div>
    <DetailItem
      :cover="cover"
      :title="title"
      :author="author"
      :published_at="published_at"
      :summary="summary"
      :paragraphs="paragraphs"
    >
      <template #adsense> <PubAdsense :place="'detail'" :type="'large'" /> </template>
    </DetailItem>
    <footer-item></footer-item>
  </div>
</template>
