<script lang="ts" setup>
import { baseConfig } from '@/config'

const { web_title } = baseConfig
</script>

<template>
  <div class="footer">
    <div class="footer-nav">
      <RouterLink class="nav-item" :to="'/contact'">Contact us</RouterLink>
      <RouterLink class="nav-item" :to="'/privacy'">Privacy Policy</RouterLink>
      <RouterLink class="nav-item" :to="'/terms'">Terms of Use</RouterLink>
      <RouterLink class="nav-item" :to="'/dmca'">DMCA</RouterLink>
    </div>
    <span class="copyright">
      Copyright © {{ new Date().getFullYear() }} {{ web_title.toUpperCase() }}. By using this site, you agree to the
      Terms of Use
    </span>
  </div>
</template>

<style scoped lang="less">
a {
  text-decoration: none;
}
.footer {
  width: 100%;
  height: 138px;
  background-color: #161616;
  padding-top: 34px;
  margin-top: 20px;
  box-sizing: border-box;
  position: absolute;
  left: 0;

  .footer-nav {
    display: flex;
    justify-content: center;
    // font-weight: 600;
    font-size: 14px;
    text-decoration: none;
  }

  .nav-item {
    color: #fff;
    padding: 0 8px;
  }

  .copyright {
    display: block;
    text-align: center;
    font-size: 12px;
    line-height: 18px;
    color: #fff;
    opacity: 0.5;
    padding: 0 23px;
    margin-top: 22px;
  }
}
</style>
