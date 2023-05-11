<script lang="ts" setup>
import pubLogo from '@/components/pub/pubLogo/pubLogo.vue'
import { useToHome } from '@/hook/route'

const { toHome } = useToHome()

const logoToImage = require(`@/assets/img/logo.png`)
</script>
<template>
  <pubLogo :logo="logoToImage" @click-event="toHome"></pubLogo>
</template>
