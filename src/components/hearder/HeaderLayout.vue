<script lang="ts" setup>
import HeaderLogo from './headerItem/headerLogo.vue'
import headerSearch from './headerItem/headerSearch.vue'
import headerMenu from './headerItem/headerMenu.vue'
import HeaderWrapper from './headerWrapper/HeaderWrapper.vue'
</script>
<template>
  <HeaderWrapper>
    <template #logo>
      <HeaderLogo></HeaderLogo>
    </template>
    <template #menu>
      <headerMenu></headerMenu>
    </template>
    <template #search>
      <headerSearch></headerSearch>
    </template>
  </HeaderWrapper>
</template>
