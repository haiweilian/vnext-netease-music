<template>
  <ElInput
    v-model="search"
    placeholder="搜索"
    :suffix-icon="Search"
    @click="isSearch = true"
    @keyup.enter="goSearch(search, true)"
  />
  <teleport to="#app">
    <!-- 搜索推荐 -->
    <div v-show="isSearch" ref="outside" class="search">
      <p class="search__title">热门搜索</p>
      <div class="search__tags">
        <span v-for="hot of hots" :key="hot" class="search__tag" @click="goSearch(hot, true)">
          {{ hot }}
        </span>
      </div>
      <p class="search__title">搜索历史</p>
      <div class="search__tags">
        <span v-for="hot of storage" :key="hot" class="search__tag" @click="goSearch(hot)">
          {{ hot }}
        </span>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { ElInput } from 'element-plus'
import { Search } from '@element-plus/icons-vue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStorage, onClickOutside } from '@vueuse/core'

import { getSearchHot } from '~/api/search'
import { isEmpty } from '~/utils'
import { GLOBAL_SEARCH_HOT_KEY } from '~/utils/constant'
import { usePlayerStore } from '~/store/modules/player'

const router = useRouter()
const playerStore = usePlayerStore()

/**
 * "onClickOutside" 监听元素外的点击事件
 */
const search = ref<string>('')
const isSearch = ref<boolean>(false)
const outside = ref(null)
onClickOutside(outside, () => {
  if (isSearch.value) isSearch.value = false
})

/**
 * 1、关闭搜索弹窗
 * 2、跳转到搜索页
 * 3、如果歌词打开关闭歌词
 * 4、存储历史记录最新的记录排到最前
 */
const hots = ref<string[]>([])
const storage = useStorage<string[]>(GLOBAL_SEARCH_HOT_KEY, [])
const goSearch = (keyword: string, history = false) => {
  if (isEmpty(keyword)) {
    return
  }

  isSearch.value = false
  router.push(`/search/${keyword}`)
  playerStore.setLyricPageStatus(false)

  if (history) {
    storage.value.unshift(keyword)
    storage.value = [...new Set(storage.value)]
  }
}

onMounted(async () => {
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
  box-shadow: 0 0.142rem 0.571rem 0 rgb(0 0 0 / 20%);

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
