<script lang="ts" setup>
import PubAdsense from '../pubAdsense/PubAdsense.vue'
import { storeToRefs } from 'pinia'
import { useTaboolaStore } from '@/store/taboola'

const taboolaStore = useTaboolaStore()
const { taboolaList } = storeToRefs(taboolaStore)
</script>
<template>
  <div class="logo"><img src="@/assets/img/news.png" alt="logo" v-if="taboolaList.length > 0" /></div>
  <div v-for="(item, index) in taboolaList" :key="item.id">
    <PubAdsense :place="'middle'" :type="'cover'" v-if="index == 0 || index == 4 || index == 8" />
    <PubAdsense :place="'middle'" :type="'small'" v-else-if="index !== taboolaList.length - 1" />
    <hr v-if="index !== taboolaList.length - 1 && index !== taboolaList.length - 2" />
  </div>
  <!-- <PubAdsense :place="'middle'" :type="'cover'" />
  <hr />
  <PubAdsense :place="'middle'" :type="'small'" />
  <hr />
  <PubAdsense :place="'middle'" :type="'small'" />
  <hr />
  <PubAdsense :place="'middle'" :type="'small'" />
  <hr />
  <PubAdsense :place="'middle'" :type="'cover'" />
  <hr />
  <PubAdsense :place="'middle'" :type="'small'" />
  <hr />
  <PubAdsense :place="'middle'" :type="'small'" />
  <hr />
  <PubAdsense :place="'middle'" :type="'small'" />
  <hr /> -->
</template>
<style lang="less" scoped>
.logo {
  text-align: right;
  margin-bottom: 7px;
  img {
    width: 98px;
    height: 16px;
  }
}
hr {
  height: 0.5px;
  opacity: 0.15;
  border: 0.5px solid #1c1d23;
  margin: 15px 0;
}
</style>
