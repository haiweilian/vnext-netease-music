<template>
  <ElInput
    v-model="search"
    placeholder="搜索"
    suffix-icon="el-icon-search"
    @focus="isSearch = true"
    @keyup.enter="goSearch(search, true)"
  />
  <!-- 传入到最外层 -->
  <teleport to="#app">
    <div v-show="isSearch" ref="outside" class="search">
      <p class="search__title">
        热门搜索
      </p>
      <div class="search__tags">
        <span
          v-for="hot of hots"
          :key="hot"
          class="search__tag"
          @click="goSearch(hot, true)"
        >
          {{ hot }}
        </span>
      </div>
      <p class="search__title">
        搜索历史
      </p>
      <div class="search__tags">
        <span
          v-for="hot of storage"
          :key="hot"
          class="search__tag"
          @click="goSearch(hot)"
        >
          {{ hot }}
        </span>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { ElInput } from 'element-plus'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStorage, onClickOutside } from '@vueuse/core'

import { getSearchHot } from '~/api/search'
import { isEmpty } from '~/utils'
import { GLOBAL_SEARCH_HOT_KEY } from '~/utils/constant'

/**
 * "onClickOutside" 监听元素外的点击，再合适的实际关闭搜索框
 */
const search = ref<string>('')
const isSearch = ref<boolean>(false)
const outside = ref(null)
onClickOutside(outside, () => {
  isSearch.value = false
})

/**
 * 跳转到搜索页，并存储历史记录
 */
const hots = ref<string[]>([])
const router = useRouter()
const storage = useStorage<string[]>(GLOBAL_SEARCH_HOT_KEY, [])
const goSearch = (keyword: string, history = false) => {
  if (isEmpty(keyword)) {
    return
  }

  isSearch.value = false
  router.push(`/search/${keyword}`)

  if (history) {
    storage.value.unshift(keyword)
    storage.value = [...new Set(storage.value)]
  }
}

onMounted(async() => {
  hots.value = await getSearchHot()
})
</script>

<style lang="scss" scoped>
@include b(search) {
  position: fixed;
  top: 50px;
  right: 0;
  bottom: 60px;
  z-index: $z-index-search;
  width: 350px;
  padding: 15px 20px;
  overflow-y: auto;
  background: #fff;
  box-shadow: 0 0.14286rem 0.57143rem 0 rgb(0 0 0 / 20%);

  @include e(title) {
    margin-bottom: 15px;
    font-size: 12px;
    color: #5c5c5c;
  }

  @include e(tags) {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
  }

  @include e(tag) {
    padding: 4px 15px;
    margin-right: 5px;
    margin-bottom: 10px;
    font-size: 12px;
    cursor: pointer;
    border: 1px solid #d9d9d9;
    border-radius: 2px;

    &:hover {
      background: #f5f5f5;
    }
  }
}
</style>
