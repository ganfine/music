<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

interface IProps {
  list: number
  total: number | undefined
}

interface IEmits {
  (e: 'changeEvent', page: number): void
}

defineProps<IProps>()
defineEmits<IEmits>()

const route = useRoute()

const _page = parseInt((route.params.page as string).replace(/[a-zA-Z]*/, ''))
const currentPage = ref<number>(_page)
</script>

<template>
  <van-pagination
    v-model="currentPage"
    :items-per-page="list"
    :total-items="total"
    :show-page-size="5"
    @change="(page: number) => $emit('changeEvent', page)"
    color="#ffffff"
  >
    <template #prev-text>
      <van-icon name="arrow-left" />
    </template>
    <template #next-text>
      <van-icon name="arrow" />
    </template>
    <template #page="{ text }">{{ text }}</template>
  </van-pagination>
</template>
<style lang="less" scoped>
:deep(.van-pagination__item) {
  color: #000;
}
:deep(.van-pagination__item--active) {
  background: #000;
  color: #fff;
}
:deep(.van-hairline--surround:after) {
  border-width: 0;
}
</style>
