<script lang="ts" setup>
import { storeToRefs } from 'pinia'

import { useCategoryStore } from '@/store/category'
import { useRedirect } from '@/hook/route/index'

import PubNav from '@/components/pub/pubNav/PubNav.vue'

const categoryStore = useCategoryStore()
const { getCategoriesAction } = categoryStore
const { categories, requestStatus } = storeToRefs(categoryStore)
const { toRedirect } = useRedirect()

if (requestStatus.value === 'stoped') {
  getCategoriesAction()
}
</script>

<template>
  <PubNav :categories="categories" @click-event="(value) => toRedirect({ path: 'category', query: value, page: 1 })" />
</template>
