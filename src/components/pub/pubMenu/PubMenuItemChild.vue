<script lang="ts" setup>
interface IEmits {
  (e: 'clickEvent'): void
}
defineEmits<IEmits>()
</script>
<template>
  <ul class="about">
    <li class="about-item" @click="$emit('clickEvent')">
      <router-link class="item" :to="'/contact'">Contact us</router-link>
    </li>
    <li class="about-item" @click="$emit('clickEvent')">
      <router-link class="item" :to="'/privacy'">Privacy Policy</router-link>
    </li>
    <li class="about-item" @click="$emit('clickEvent')">
      <router-link class="item" :to="'/terms'">Terms of Use</router-link>
    </li>
    <li class="about-item" @click="$emit('clickEvent')">
      <router-link class="item" :to="'/#'">DMCA</router-link>
    </li>
  </ul>
</template>
<style scoped lang="less">
.about {
  text-align: center;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: Center;
  margin: 0;
}

.about-item {
  padding: 0 5px;
  margin-bottom: 7px;
  list-style-type: none;

  .item {
    text-decoration: none;
    font-size: 9px;
    font-family: HelveticaNeue;
    color: #ffffff;
    line-height: 20px;
  }
}
</style>
