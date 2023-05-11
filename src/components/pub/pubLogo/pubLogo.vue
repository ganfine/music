<script lang="ts" setup>
interface IProps {
  logo: string
}
interface IEmits {
  (e: 'clickEvent'): void
}
defineProps<IProps>()
defineEmits<IEmits>()
</script>
<template>
  <div class="logo" @click="$emit('clickEvent')">
    <img class="image" :src="logo" alt="Logo" />
  </div>
</template>
<style scoped lang="less">
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 104px;
  height: 30px;

  .image {
    width: 104px;
    height: 30px;
  }
}
</style>
