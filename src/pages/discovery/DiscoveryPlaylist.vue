<template>
  <h6 class="title">推荐歌单</h6>
  <div class="content">
    <PlaylistCard v-for="playlist of playlists" :key="playlist.id" :playlist="playlist" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import PlaylistCard from '~/components/playlist/PlaylistCard.vue'
import { getPersonalizedPlaylist } from '~/api/playlist'
import type { IPlaylist } from '~/types'

const playlists = ref<IPlaylist[]>([])

onMounted(async () => {
  playlists.value = await getPersonalizedPlaylist({ limit: 10 })
})
</script>

<style lang="scss" scoped>
.title {
  padding: 10px 0;
  font-size: 18px;
  font-weight: normal;
  color: #333;
}

.content {
  min-height: 500px;
}
</style>
