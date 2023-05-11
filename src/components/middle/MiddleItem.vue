<script lang="ts" setup>
import { useToback } from '@/hook/route'
import { IParagraph } from '@/types/articleDetail/index'

interface IProps {
  cover: string
  title: string
  author: string
  published_at: string
  summary: string
  paragraphs: IParagraph[]
}

interface IEmits {
  (e: 'clickEvent'): void
}
defineProps<IProps>()
defineEmits<IEmits>()

const { toBack } = useToback(-1)
</script>
<template>
  <div class="to-back" @click="toBack">
    <img src="@/assets/img/toback.png" alt="toback" />
  </div>
  <img class="cover" :src="cover" /><img />
  <div class="title">
    {{ title }}
  </div>
  <div class="title-time">{{ author }} <strong>·</strong> {{ published_at }}</div>
  <slot name="adsense"></slot>
  <div class="section">
    {{ summary }}
  </div>
  <div class="read-more" @click="$emit('clickEvent')">READ MORE</div>
  <hr />
</template>
<style lang="less" scoped>
.to-back {
  width: 15px;
  height: 30px;
  margin: 10px 0 17.5px 0;
}
.title {
  font-size: 24px;
  margin-top: 15px;
  font-family: Poppins;
  color: #1c1d23;
  line-height: 27px;
  font-weight: bold;
}
.title-time {
  margin: 10px 0 20px 0;
  font-size: 14px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #888888;
  line-height: 12px;
}
.cover {
  width: 100%;
  // height: 211px;
  border-radius: 12px;
}
.cover-time {
  margin: 5px 0 12px 0;
  font-size: 11px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #888888;
  line-height: 10px;
}
.section {
  font-size: 14px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #0d0d0d;
  line-height: 21px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
.read-more {
  width: 129.5px;
  height: 40px;
  margin: 25px 0 20px 0;
  background: #eb4402;
  border-radius: 25px;
  width: 168px;
  font-size: 15px;
  font-weight: bold;
  font-family: Poppins-Regular, Poppins;

  color: #ffffff;
  line-height: 40px;
  text-align: center;
}
hr {
  height: 4px;
  background: #000000;
  opacity: 0.06;
}
</style>
