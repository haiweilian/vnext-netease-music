<template>
  <h6 class="title">最新音乐</h6>
  <div class="content">
    <SongCard v-for="song of songs" :key="song.id" :song="song" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import SongCard from '~/components/song/SongCard.vue'
import { getPersonalizedNewsong } from '~/api/playlist'
import type { ISong } from '~/types'

const songs = ref<ISong[]>([])

onMounted(async () => {
  songs.value = await getPersonalizedNewsong({ limit: 10 })
})
</script>

<style lang="scss" scoped>
.title {
  padding: 10px 0;
  font-size: 18px;
  font-weight: normal;
  color: #333;
}
</style>
