<script lang="ts" setup>
import { ref } from 'vue'

interface IEmits {
  (e: 'keyboardEvent', value: string): void
}

const emits = defineEmits<IEmits>()

const searchVal = ref('')
const placeholder = ref('Popular searches')
const searchRef = ref()

const blurChange = () => {
  placeholder.value = 'Popular searches'
  searchVal.value = ''
}

const focusChange = () => {
  placeholder.value = ''
}

const submit = (e: any) => {
  if (e.keyCode === 13) {
    e.preventDefault()
    if (searchVal.value.trim() !== '') {
      emits('keyboardEvent', searchVal.value.trim())
    }
    // 关闭软键盘
    searchRef.value.blur()
  }
}
</script>
<template>
  <input
    v-model.trim.lazy="searchVal"
    @blur="blurChange"
    @focus="focusChange"
    @keyup="submit"
    class="search-box"
    type="search"
    :placeholder="placeholder"
    ref="searchRef"
  />
</template>
<style>
.search-box {
  flex: 1;
  padding: 0 10px 0 28px;
  width: 230px;
  height: 30px;
  border-radius: 5px;
  background-image: url('@/assets/img/search.png');
  background-size: 12px;
  background-repeat: no-repeat;
  background-position: left 10px top 9px;
  border: 1px #b9b9b9 solid;
  box-sizing: border-box;
  outline: none;
  font-size: 12px;
  font-family: Lato-Regular, Lato;
  font-weight: 400;
  color: #8c98b2;
  line-height: 12px;
}
</style>
