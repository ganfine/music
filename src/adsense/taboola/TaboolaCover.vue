<script lang="ts" setup>
import type { ITaboola } from '@/types/taboola'

import PubImage from '@/components/pub/pubImage/PubImage.vue'

interface IProps {
  adsense: ITaboola
}

interface IEmits {
  (e: 'clickEvent'): void
}

defineEmits<IEmits>()
defineProps<IProps>()
</script>

<template>
  <div v-if="adsense" class="taboola">
    <div class="ads-wrapper">
      <a class="ads-link" :href="adsense.url" @click="$emit('clickEvent')">
        <PubImage :src="adsense.image" :height="200" :radius="6" />
        <span class="sponsored">{{ adsense.sponsered }}</span>
        <!-- <span class="title">{{ adsense.title }}</span> -->
        <span class="info">{{ adsense.desc }}</span>
      </a>
    </div>
  </div>
</template>

<style scoped lang="less">
.taboola {
  margin: 10px 0;
  width: 100%;

  .ads-wrapper {
    height: 100%;

    font-size: 0;

    .ads-link {
      text-decoration: none;
      color: #3d3d3d;
    }
    .sponsored {
      display: block;
      font-size: 12px;
      font-family: Poppins-Regular, Poppins;
      font-weight: 400;
      color: #888888;
      line-height: 12px;
      padding: 12px 0 4px 0;
    }

    .title,
    .info {
      display: block;
      font-size: 22px;
      font-family: Poppins-Regular, Poppins;
      font-weight: 400;
      color: #1c1d23;
      line-height: 27px;
    }
  }
}
</style>
