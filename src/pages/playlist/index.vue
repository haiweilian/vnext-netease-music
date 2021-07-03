<template>
  <PlaylistIntro />
  <Tab
    v-model="currentTab"
    :tab="localPlaylistTabs"
    @change="topPlaylist"
  />
  <div class="result">
    <PlaylistCard
      v-for="playlist of playlists"
      :key="playlist.id"
      :playlist="playlist"
    />
  </div>
  <div class="pagination">
    <ElPagination
      v-model:currentPage="currentPage"
      layout="prev, pager, next"
      :total="total"
      @current-change="topPlaylist"
    />
  </div>
</template>

<script setup lang="ts">
import { ElPagination } from 'element-plus'
import { ref, onMounted } from 'vue'

import PlaylistIntro from './PlaylistIntro.vue'
import Tab from '~/components/tab/Tab.vue'
import PlaylistCard from '~/components/playlist/PlaylistCard.vue'

import { getTopPlaylist } from '~/api/playlist'
import { localPlaylistTabs } from '~/utils/local'
import type { IPlaylist } from '~/types'

const total = ref<number>(0)
const playlists = ref<IPlaylist[]>([])
const currentTab = ref<string | number>(localPlaylistTabs[0]?.value)
const currentPage = ref<number>(1)

const topPlaylist = async() => {
  const topPlaylist = await getTopPlaylist({
    cat: currentTab.value,
    offset: currentPage.value - 1,
  })
  total.value = topPlaylist.total
  playlists.value = topPlaylist.playlists
}

onMounted(() => {
  topPlaylist()
})
</script>

<style lang="scss" scoped>
.pagination {
  margin-top: 20px;
  text-align: right;
}
</style>
