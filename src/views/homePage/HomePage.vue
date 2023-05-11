<script lang="ts" setup>
import HeaderLayout from '@/components/hearder/HeaderLayout.vue'
import NavBar from '@/components/navBar/NavBar.vue'
import ArticlesWrapper from '@/components/articles/ArticlesWrapper.vue'
import FooterItem from '@/components/footer/FooterItem.vue'
</script>

<template>
  <div class="home-page">
    <HeaderLayout />
    <NavBar />
    <ArticlesWrapper :key="($route.name as string)" />
    <FooterItem />
  </div>
</template>

<style scoped lang="less"></style>
