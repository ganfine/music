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
  background-image: url('@/assets/img/search.png');
  flex: 1;
  padding: 0 10px 0 36px;
  width: 230px;
  height: 42px;
  border-radius: 5px;
  background-size: 14px;
  background-repeat: no-repeat;
  background-position: left 16px top 14px;
  border: 0 solid #b9b9b9;
  box-sizing: border-box;
  outline: none;
  font-size: 14px;
  font-family: Lato-Regular, Lato;
  font-weight: 400;
  color: #1c1d23;
  line-height: 14px;
}
input::input-placeholder {
  color: #8c98b2;
}
input::-webkit-input-placeholder {
  color: #8c98b2;
}
input::-moz-placeholder {
  color: #8c98b2;
}
input::-moz-placeholder {
  color: #8c98b2;
}
input::-ms-input-placeholder {
  color: #8c98b2;
}
</style>
