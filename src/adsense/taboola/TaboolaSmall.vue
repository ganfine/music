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
        <div class="section">
          <!-- <span class="title">{{ adsense.title }}</span> -->
          <span class="info">{{ adsense.desc }}</span>
          <span class="sponsored">{{ adsense.sponsered }}</span>
        </div>
        <div class="img">
          <PubImage :src="adsense.image" :height="75" :radius="6" />
        </div>
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
      display: flex;
      .section {
        flex: 1;
      }
      .img {
        flex: 0 0 120px;
      }
    }
    .sponsored {
      display: block;
      font-size: 12px;
      font-family: Poppins-Regular, Poppins;
      font-weight: 400;
      color: #888888;
      line-height: 12px;
      padding: 12px 0;
    }

    .title,
    .info {
      font-size: 16px;
      font-family: Poppins-Regular, Poppins;
      font-weight: 400;
      color: #1c1c1c;
      line-height: 21px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
