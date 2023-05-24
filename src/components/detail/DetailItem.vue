<script lang="ts" setup>
import PubShareBar from '../pub/pubShareBar/PubShareBar.vue'
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
    <slot name="adsense" v-if="summary"></slot>
    <div class="section" v-if="summary">{{ summary }}</div>
    <ul>
      <li v-for="item in paragraphs" :key="item.id">
        <div class="heading">{{ item.heading }}</div>
        <div class="cover"><img :src="item.image" alt="image" /></div>
        <div class="cover-via">
          <a :href="item.url">{{ item.via }}</a>
        </div>
        <div class="share">
          <PubShareBar :image="item.image" :title="(title as string)" :index="item.index"></PubShareBar>
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
  font-size: 28px;
  font-family: Poppins;
  color: #1c1d23;
  line-height: 28px;
  font-weight: bold;
}
.title-time {
  margin: 10px 0 21px 0;
  font-size: 15px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #888888;
  line-height: 12px;
}
.heading {
  margin-top: 20px;
  font-size: 20px;
  font-family: Poppins;
  color: #1c1d23;
  line-height: 27px;
  font-weight: bold;
}
.cover {
  width: 100%;

  margin-top: 15px;
  border-radius: 6px;
  img {
    border-radius: 6px;
  }
}
.share {
  margin: 0 0 10px 2px;
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
  margin: 0 0 10px 0;
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
  font-size: 15px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #0d0d0d;
  line-height: 21px;
}
</style>
