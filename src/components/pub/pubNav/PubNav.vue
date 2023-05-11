<script lang="ts" setup>
import type { ICategory } from '@/types/category'

// //接收父组件传递的元素
interface IProps {
  categories: ICategory[]
}

//抛出改变分类的方法
interface IEmits {
  (e: 'clickEvent', value: string): void
}

defineProps<IProps>()
defineEmits<IEmits>()
</script>

<template>
  <div class="cateory">
    <div class="cateory-wrapper">
      <ul class="cateory-list">
        <li
          v-for="item in categories"
          :key="item.sub"
          :class="{ active: $route.params.value === item.sub }"
          class="cateory-list-item"
          @click="$emit('clickEvent', item.sub)"
        >
          {{ item.sub }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="less">
.cateory {
  position: relative;
  font-size: 0;
}

.cateory-wrapper {
  margin: 10px 0;
  padding: 0 20px;
}

.cateory-list {
  width: 100%;
  height: 100%;

  display: inline-block;
  box-sizing: border-box;
  font-size: 0;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
}

.cateory-list-item {
  padding: 6px 0;
  margin-right: 20px;
  display: inline-block;
  height: 15px;
  font-size: 16px;
  font-family: HelveticaNeue;
  color: #1f1f1f;
  line-height: 15px;
  opacity: 0.7;
}

.cateory-list-item:last-child {
  margin-right: 0;
}

.cateory-list-item.active {
  font-weight: bold;
  color: #1f1f1f;
  opacity: 1;
}
</style>
