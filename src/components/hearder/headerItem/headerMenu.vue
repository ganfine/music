<script lang="ts" setup>
import PubMenu from '@/components/pub/pubMenu/PubMenu.vue'

import { storeToRefs } from 'pinia'
import { useCategoryStore } from '@/store/category'
import { useRedirect } from '@/hook/route/index'
const { toRedirect } = useRedirect()

const categoriesStore = useCategoryStore()
const { getCategoriesAction } = categoriesStore
const { categories, requestStatus } = storeToRefs(categoriesStore)

if (requestStatus.value === 'stoped') {
  getCategoriesAction()
}
</script>
<template>
  <PubMenu
    :categories="categories"
    @click-event="(value) => toRedirect({ path: 'category', query: value, page: 1 })"
  ></PubMenu>
</template>
