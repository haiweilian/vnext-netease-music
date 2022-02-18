<template>
  <Tabs v-model="currentTab" :tabs="localSongTabs" @change="topSongCallback" />
  <div class="content">
    <SongCard v-for="song of songs" :key="song.id" :song="song" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import Tabs from '~/components/base/Tabs.vue'
import SongCard from '~/components/song/SongCard.vue'

import { getTopSong } from '~/api/playlist'
import { localSongTabs } from '~/utils/local'
import type { ISong } from '~/types'

const songs = ref<ISong[]>([])
const currentTab = ref<string | number>(localSongTabs[0]?.value)

const topSongCallback = async () => {
  songs.value = await getTopSong({ type: currentTab.value })
}

onMounted(() => {
  topSongCallback()
})
</script>
