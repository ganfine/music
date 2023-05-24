<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useTaboolaStore } from '@/store/taboola'
import { useAdsense } from '@/store/adsense'
import { adsenseConfig, googleConfig } from '@/config'

import TaboolaAds from '@/adsense/taboola/TaboolaAds.vue'
import GoogleAds from '@/adsense/google/GoogleAds.vue'

interface IProps {
  place: 'list' | 'detail' | 'middle'
  type: 'large' | 'small' | 'cover'
}

const props = defineProps<IProps>()
const index: number = props.place == 'middle' ? 9 : 4

const taboolaStore = useTaboolaStore()
const adsenseStore = useAdsense()
const { getTaboolaAction } = taboolaStore
const { taboolaList, requestStatus } = storeToRefs(taboolaStore)
const { allow } = storeToRefs(adsenseStore)

const { list, detail, middle, ca_pub } = googleConfig
const { fillGoogle, fillTaboola } = adsenseConfig
const googleStatus = ref<'fill' | 'unfill'>(fillGoogle)
const taboolaStatus = ref<'fill' | 'unfill'>(fillTaboola)

const geTaboola = () => {
  if (taboolaStatus.value === 'fill' && googleStatus.value === 'unfill') {
    if (requestStatus.value === 'stoped') {
      getTaboolaAction(2, index)
    }
  }
}

// 填充google google没有填充的情况下 => 允许填充taboola
const getAdStatus = (status: 'fill' | 'unfill') => {
  googleStatus.value = status
  geTaboola()
}

// 仅填充taboola
onMounted(() => geTaboola())
</script>

<template>
  <template v-if="place === 'list'">
    <TaboolaAds v-if="taboolaList.length > 0 && allow" :type="type" :adsenses="taboolaList" :palce="'list'" />
    <div v-if="googleStatus === 'fill'">
      <GoogleAds :ca-pub="ca_pub" :ads-slot="list" :full-width="true" @ad-status="getAdStatus" />
    </div>
  </template>
  <template v-if="place === 'detail'">
    <TaboolaAds v-if="taboolaList.length > 0 && allow" :type="type" :adsenses="taboolaList" :palce="'detail'" />
    <div v-if="googleStatus === 'fill'">
      <GoogleAds :ca-pub="ca_pub" :ads-slot="detail" :full-width="true" @ad-status="getAdStatus" />
    </div>
  </template>
  <template v-if="place === 'middle'">
    <TaboolaAds v-if="taboolaList.length > 0 && allow" :type="type" :adsenses="taboolaList" :palce="'middle'" />
    <div v-if="googleStatus === 'fill'">
      <GoogleAds :ca-pub="ca_pub" :ads-slot="middle" :full-width="true" @ad-status="getAdStatus" />
    </div>
  </template>
</template>
