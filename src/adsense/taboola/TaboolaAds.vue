<script lang="ts" setup>
import { computed } from 'vue'

import type { ITaboola } from '@/types/taboola'
import { adsenseDeploy } from './utils'
import { sendAdsClick } from '@/utils/report/adsClick'
import { sendEvent } from '@/analytics/index'

import TaboolaLarge from './TaboolaLarge.vue'
import TaboolaSmall from './TaboolaSmall.vue'
import TaboolaCover from './TaboolaCover.vue'

interface IProps {
  palce: string
  type: 'large' | 'small' | 'cover'
  adsenses: ITaboola[]
}

const props = defineProps<IProps>()
const { adsenses } = computed(() => props).value
// 广告派发
const adsense = adsenseDeploy(adsenses)
const handleClick = () => {
  sendEvent(`${props.palce}` + 'AdsClick')
  sendAdsClick(adsense)
}
</script>

<template>
  <TaboolaLarge v-if="type === 'large'" :adsense="adsense" @click-event="handleClick" />
  <TaboolaSmall v-if="type === 'small'" :adsense="adsense" @click-event="handleClick" />
  <TaboolaCover v-if="type === 'cover'" :adsense="adsense" @click-event="handleClick" />
</template>
