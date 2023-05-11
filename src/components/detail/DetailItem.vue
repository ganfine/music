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

defineProps<IProps>()

const { toBack } = useToback(-2)
</script>
<template>
  <div class="detail">
    <div class="to-back" @click="toBack">
      <img src="@/assets/img/toback.png" alt="toback" />
    </div>
    <div class="title">
      {{ title }}
    </div>
    <div class="title-time">{{ author }} <strong>·</strong> {{ published_at }}</div>
    <!-- <div class="cover" v-if="summary">
      <img :src="cover" alt="cover" />
    </div> -->
    <!-- <div class="cover-time" v-if="summary">{{ author }} <strong>·</strong> {{ published_at }}</div> -->
    <slot name="adsense" v-if="summary"></slot>
    <div class="section" v-if="summary">{{ summary }}</div>
    <ul>
      <li v-for="item in paragraphs" :key="item.id">
        <div class="cover"><img :src="item.image" alt="image" /></div>
        <div class="cover-via">
          <a :href="item.url">{{ item.via }}</a>
        </div>
        <slot name="adsense"></slot>
        <div class="section">
          <p v-for="index in item.contents" :key="index">{{ index }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang="less" scoped>
.detail {
  padding: 15px 20px 30px 20px;
  box-sizing: border-box;
  min-height: 100vh;
}
.to-back {
  width: 15px;
  height: 30px;
  margin: 10px 0 17.5px 0;
}
.title {
  font-size: 24px;
  font-family: Poppins;
  color: #1c1d23;
  line-height: 27px;
  font-weight: bold;
}
.title-time {
  margin: 10px 0 21px 0;
  font-size: 14px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #888888;
  line-height: 12px;
}
.cover {
  width: 100%;
  // height: 211px;
  margin-top: 15px;
  border-radius: 6px;
  img {
    border-radius: 6px;
  }
}
.cover-time {
  margin: 5px 0 12px 0;
  font-size: 11px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #888888;
  line-height: 10px;
}
.cover-via {
  margin: 5px 0 12px 0;
  a {
    text-decoration: none;
    font-size: 11px;
    font-family: Poppins-Regular, Poppins;
    font-weight: 400;
    color: #888888;
    line-height: 10px;
  }
}
.section {
  font-size: 14px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #0d0d0d;
  line-height: 21px;
}
</style>
