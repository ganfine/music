<script lang="ts" setup>
import { useRedirect } from '@/hook/route'
import PubSearch from '@/components/pub/pubSearch/PubSearch.vue'

const { toRedirect } = useRedirect()
</script>
<template>
  <PubSearch
    @keyboard-event="(value:string) => toRedirect({ path: 'search-keyword', query: value, page: 1 })"
  ></PubSearch>
</template>
