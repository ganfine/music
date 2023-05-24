<script lang="ts" setup>
import { useHead } from './useHead'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

interface IProps {
  image?: string
  title?: string
  index?: number
}

const props = defineProps<IProps>()
const { image, title } = computed(() => props).value
const encodedImage = image && encodeURIComponent(image)
const encodedTitle = title && encodeURIComponent(title)
const route = useRoute()
const isCopied = ref(false)

const shareToFacebook = () => {
  window.open(
    `https://www.facebook.com/dialog/share?app_id=802948714840330&display=popup&href=${encodeURIComponent(
      window.location.href
    )}`
  )
}

const shareToPinterest = () => {
  window.open(`
  https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
    window.location.href
  )}&media=${encodedImage}&description=${encodedTitle}`)
}

const shareToTwitter = () => {
  window.open(
    `https://twitter.com/intent/tweet?original_referer=${encodeURIComponent(
      window.location.host
    )}&text=${encodedTitle}&url=${encodeURIComponent(window.location.href)}`
  )
}

const shareToLink = () => {
  isCopied.value = true
  setTimeout(() => {
    isCopied.value = false
  }, 3000)
  if (navigator.clipboard && window.location.href) {
    navigator.clipboard.writeText(window.location.href)
  }
}

onMounted(() => {
  if (props.index == 0) {
    useHead({
      meta: [
        {
          property: 'og:url',
          content: route.fullPath
        },
        {
          property: 'og:site_name',
          content: 'Animal Good News'
        },
        {
          property: 'og:image',
          content: image
        },
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:description',
          content: title
        },
        {
          property: 'og:type',
          content: 'article'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:image',
          content: image
        },
        {
          name: 'twitter:url',
          content: route.fullPath
        },
        {
          name: 'twitter:title',
          content: title
        },
        {
          name: 'twitter:description',
          content: title
        },
        {
          name: 'twitter:site',
          content: '@animalgoodnews'
        },
        {
          name: 'twitter:creator',
          content: '@animalgoodnews'
        }
      ]
    })
  }
})
</script>
<template>
  <div class="share-bar">
    <div class="facebook-icon icon" @click="shareToFacebook">
      <span class="icon-facebook"></span>
    </div>
    <div class="pinterest-icon icon" @click="shareToPinterest">
      <span class="icon-pinterest"></span>
    </div>
    <div class="twitter-icon icon" @click="shareToTwitter">
      <span class="icon-twitter"></span>
    </div>
    <div class="link-icon icon" @click="shareToLink">
      <span class="icon-link"></span>
    </div>
    <div v-if="isCopied" class="link-copied">
      <span class="icon-check check-icon"></span>
      Link copied
    </div>
  </div>
</template>

<style scoped lang="less">
@import url('@/assets/css/font.less');
.share-bar {
  display: flex;
  .icon {
    width: 30px;
    height: 30px;
    font-size: 22px;
    line-height: 32px;
    text-align: center;
    color: #ffffff;
    border-radius: 50%;
    margin-right: 10px;
  }
  .icon:hover {
    cursor: pointer;
  }
  .facebook-icon {
    background-color: #1a77f2;
  }
  .pinterest-icon {
    background-color: #e60019;
  }
  .twitter-icon {
    background-color: #54acee;
  }
  .link-icon {
    background-color: #1c1d23;
  }

  .link-copied {
    position: relative;
    height: 30px;
    padding: 0 10px;
    font-size: 16px;
    line-height: 30px;
    color: #ffffff;
    border-radius: 4px;
    background-color: #1c1d23;

    .check-icon {
      font-size: 14px;
      line-height: 30px;
      text-align: center;
      color: #ffffff;
      border-radius: 50%;
    }
  }

  .link-copied::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: -14px;
    transform: translateY(-50%);
    width: 0px;
    height: 0px;
    border: 6px solid transparent;
    border-right: 8px solid #1c1d23;
  }
}
</style>
