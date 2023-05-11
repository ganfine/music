<script lang="ts" setup>
// import { onMounted } from 'vue'

// import { sendPageView } from '@/utils/report/pageView'
// import { useAdsense } from '@/store/adsense'

// const { getCheckIp } = useAdsense()

// getCheckIp()

// onMounted(() => sendPageView())

import PubLoading from '@/components/pub/pubLoading/PubLoading.vue'
import PubError from '@/components/pub/pubError/PubError.vue'
import PubTop from './components/pub/pubTop/PubTop.vue'

import { useLoading } from '@/global/loading'
import { useError } from '@/global/error'

const { loading } = useLoading()
const { dataError } = useError()
</script>

<template>
  <PubTop></PubTop>
  <PubError v-if="dataError" :error="dataError" />
  <template v-else>
    <PubLoading v-if="loading.length > 0" />
    <router-view v-slot="{ Component }" :key="$route.name?.toString()">
      <keep-alive>
        <component :is="Component" v-if="$route.meta.keepAlive" />
      </keep-alive>
      <component :is="Component" v-if="!$route.meta.keepAlive" />
    </router-view>
  </template>
</template>

<style scoped lang="less">
#app {
  min-width: 320px;
  max-width: 480px;
  margin: 0 auto;
  background-color: #ffffff;
}
</style>
