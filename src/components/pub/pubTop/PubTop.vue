<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

import { debounce } from '@/utils/general'

const mark = ref()
const isShow = ref(false)

//判断当前元素距离顶端的距离来决定是否显示
const scrollHandler = debounce(() => {
  const markRect = mark.value.getBoundingClientRect()
  isShow.value = markRect.top < 0 ? true : false
}, 500)

//回到顶部
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

//组件挂载时添加监听滚动监听事件
onMounted(() => {
  window.addEventListener('scroll', scrollHandler, false)
})

//销毁后移除监听事件
onUnmounted(() => {
  window.removeEventListener('scroll', scrollHandler, false)
})
</script>

<template>
  <span class="mark" ref="mark"></span>
  <div class="icon" :class="{ remove: !isShow }">
    <span class="item-top" @click="scrollToTop()"></span>
  </div>
</template>

<style scoped lang="less">
.icon {
  position: fixed;
  right: 15px;
  bottom: 35px;
  animation: show 0.7s;
  z-index: 999;

  .item-top {
    display: block;
    height: 40px;
    width: 40px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;
    background-image: url('@/assets/img/top.png');
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
    margin-bottom: 8px;
  }
}

.icon.remove {
  animation: remove 0.7s;
  transform: translateY(130px);
}

@keyframes show {
  0% {
    transform: translateY(130px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes remove {
  100% {
    transform: translateY(130px);
  }
  0% {
    transform: translateY(0);
  }
}
</style>
