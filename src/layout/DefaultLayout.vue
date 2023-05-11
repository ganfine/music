<script lang="ts" setup>
import FooterItem from '@/components/footer/FooterItem.vue'
import PubLoading from '@/components/pub/pubLoading/PubLoading.vue'

import { useLoading } from '@/global/loading'
import { useError } from '@/global/error'

const { loading } = useLoading()
const { dataError } = useError()
</script>
<template>
  <PubError v-if="dataError" :error="dataError" />
  <template v-else>
    <PubLoading v-if="loading.length > 0" />
    <slot name="route-view"></slot>
    <FooterItem />
  </template>
</template>
