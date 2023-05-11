<script lang="ts" setup>
import { ICategory } from '@/types/category'

interface IProps {
  categories: ICategory[]
}

interface Iemits {
  (e: 'clickEvent', name: string): void
  (e: 'closeMenu'): void
}

const emits = defineEmits<Iemits>()
defineProps<IProps>()
const clickEvent = (name: string) => {
  emits('clickEvent', name)
  emits('closeMenu')
}
const closeMenu = () => {
  emits('closeMenu')
}
</script>
<template>
  <div class="menu">
    <ul class="menu-list">
      <li class="menu-list-item" v-for="item in categories" :key="item.sub" @click="clickEvent(item.sub)">
        {{ item.sub }}
      </li>
    </ul>
    <div class="menu-close" @click="closeMenu"></div>
  </div>
</template>
<style scoped lang="less">
.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 54%;
  background-color: #000000;
  opacity: 80%;
  z-index: 99;

  .menu-list {
    width: 100%;
    font-size: 16px;
    line-height: 18px;
    font-weight: normal;
    color: #fff;
    margin: 0 auto;
    text-align: center;
    padding: 0;

    .menu-list-item {
      padding: 0 15px;
      margin-bottom: 50px;
      list-style: none;
    }
  }

  .menu-close {
    width: 21px;
    height: 31px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
    background-image: url('@/assets/img/close.png');
    background-size: 100%;
  }
}
</style>
