<script lang="ts" setup>
import PubImage from '../pub/pubImage/PubImage.vue'
import { IArticles } from '@/types/articlesList'

interface IProps {
  article: IArticles
}
interface IEmits {
  (e: 'clickEvent', value: string): void
}

defineProps<IProps>()
defineEmits<IEmits>()
</script>

<template>
  <div class="ArticlesItem" @click="$emit('clickEvent', article.slug)">
    <PubImage :src="article.cover" :height="215" :radius="6" :fit="'cover'" />
    <div class="item-time">
      {{ article.author }}
      <strong>·</strong>
      {{ article.published_at }}
    </div>
    <span class="item-title">{{ article.title }}</span>
  </div>
</template>

<style scoped lang="less">
.item-title {
  white-space: normal;
  font-size: 22px;
  font-weight: 800;
  font-family: Poppins-Bold;
  color: #1c1d23;
  line-height: 27px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
.item-time {
  padding: 10px 0 5px 0;
  font-size: 14px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #888888;
  line-height: 14px;
}
</style>
