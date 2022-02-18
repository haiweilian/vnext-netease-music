<template>
  <PlaylistIntro />
  <Tabs v-model="currentTab" :tabs="localPlaylistTabs" @change="topPlaylistCallback" />
  <div class="result">
    <PlaylistCard v-for="playlist of playlists" :key="playlist.id" :playlist="playlist" />
  </div>
  <ElPagination
    v-model:currentPage="currentPage"
    layout="prev, pager, next"
    :total="total"
    @current-change="topPlaylistCallback"
  />
</template>

<script setup lang="ts">
import { ElPagination } from 'element-plus'
import { ref, onMounted } from 'vue'

import PlaylistIntro from './PlaylistIntro.vue'
import Tabs from '~/components/base/Tabs.vue'
import PlaylistCard from '~/components/playlist/PlaylistCard.vue'

import { getTopPlaylist } from '~/api/playlist'
import { localPlaylistTabs } from '~/utils/local'
import type { IPlaylist } from '~/types'

const total = ref<number>(0)
const playlists = ref<IPlaylist[]>([])
const currentTab = ref<string | number>(localPlaylistTabs[0]?.value)
const currentPage = ref<number>(1)

const topPlaylistCallback = async () => {
  const topPlaylist = await getTopPlaylist({
    cat: currentTab.value,
    offset: currentPage.value - 1,
  })
  total.value = topPlaylist.total
  playlists.value = topPlaylist.playlists
}

onMounted(() => {
  topPlaylistCallback()
})
</script>
