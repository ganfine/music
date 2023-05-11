<script lang="ts" setup></script>
<template>
  <header class="headerWrapper">
    <div class="logo-menu">
      <div class="logo">
        <slot name="logo"></slot>
      </div>
      <div class="menu">
        <slot name="menu"></slot>
      </div>
    </div>
    <div class="title"><span>GOOD LIFE MAGAZINE</span></div>
    <div class="search">
      <slot name="search"></slot>
    </div>
  </header>
</template>
<style scoped lang="less">
.headerWrapper {
  // width: 750px;
  width: 100%;
  height: 270px;
  // position: absolute;
  // top: 0;
  // left: 0;
  align-items: center;
  box-sizing: border-box;
  background-image: url(@/assets/img/banner.webp);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-bottom: 1px solid #e9e9eb;
}
.logo-menu {
  display: flex;
  justify-content: space-between;
}
.logo {
  width: 90px;
  height: 28px;
  margin-top: 16px;
  margin-left: 20px;
}

.menu {
  margin-top: 19px;
  margin-right: 20px;
}
.title {
  width: 100%;
  height: 25px;
  font-size: 25px;
  font-family: Poppins-Light, Poppins;
  font-weight: 300;
  color: #ffffff;
  line-height: 25px;
  display: flex;
  justify-content: center;
  align-items: Center;
  margin-top: 56px;
  margin-bottom: 15px;
}
.search {
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: Center;
  padding: 0 17%;
}
</style>
