<template>
  <div class="search-header">
    <span class="search-header__keywords">日不落</span>
    <span class="search-header__found">找到300个结果</span>
  </div>
  <ElTabs v-model="activeName" @tab-click="handleClick">
    <ElTabPane label="歌曲" name="song">
      <SearchSong />
    </ElTabPane>
    <ElTabPane label="歌单" name="playlist">
      <SearchPlaylist />
    </ElTabPane>
  </ElTabs>
</template>

<script setup lang="ts">
import { ElTabs, ElTabPane } from 'element-plus'
import { ref } from 'vue'
import SearchSong from './SearchSong.vue'
import SearchPlaylist from './SearchPlaylist.vue'

const activeName = ref('song')
const handleClick = (tab: string, event: Event) => {
  // console.log(tab, event)
}
</script>

<style lang="scss" scoped>
@include b(search-header) {
  padding: 20px 0;

  @include e(keywords) {
    display: inline-block;
    margin-right: 4px;
    font-size: 24px;
    font-weight: 700;
  }

  @include e(found) {
    font-size: 12px;
    color: #bebebe;
    letter-spacing: 2px;
  }
}
</style>
