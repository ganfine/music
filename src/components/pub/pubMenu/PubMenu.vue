<script lang="ts" setup>
import { ref } from 'vue'
import type { ICategory } from '@/types/category'
import PubMenuItem from '@/components/pub/pubMenu/PubMenuItem.vue'

interface IProps {
  categories: ICategory[]
}

interface Iemits {
  (e: 'clickEvent', name: string): void
}

defineProps<IProps>()
const emits = defineEmits<Iemits>()

const showMenu = ref(false)

const clickEvent = (name: string) => emits('clickEvent', name)
</script>
<template>
  <div class="menu-toggle" @click="() => (showMenu = true)"></div>
  <transition name="content">
    <PubMenuItem
      v-show="showMenu"
      @close-menu="() => (showMenu = false)"
      @click-event="(name) => clickEvent(name)"
      :categories="categories"
    ></PubMenuItem>
  </transition>
  <transition name="mask">
    <div class="menu-mask" v-show="showMenu" @click="() => (showMenu = false)"></div>
  </transition>
</template>
<style scoped lang="less">
.menu-toggle {
  background-image: url('@/assets/img/menu.png');
  background-size: 100%;

  width: 23px;
  height: 23px;
  transition: all 0.4s linear;
}
.menu-mask {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
  z-index: 9;
}

.content-enter-active,
.content-leave-active {
  transition: all 0.4s linear;
}

.content-enter-from,
.content-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.content-enter-to,
.content-leave-from {
  opacity: 1;
}

.mask-enter-active,
.mask-leave-active {
  transition: all 0.4s linear;
}

.mask-enter-from,
.mask-leave-to {
  opacity: 0;
}

.mask-enter-to,
.mask-leave-from {
  opacity: 1;
}
</style>
