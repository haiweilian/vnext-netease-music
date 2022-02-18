<template>
  <div class="result">
    <PlaylistCard v-for="playlist of playlists" :key="playlist.id" :playlist="playlist" />
  </div>
  <ElPagination
    v-model:currentPage="currentPage"
    layout="prev, pager, next"
    :total="total"
    @current-change="searchCallback"
  />
</template>

<script setup lang="ts">
import { ElPagination } from 'element-plus'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import PlaylistCard from '~/components/playlist/PlaylistCard.vue'
import { getSearch } from '~/api/search'
import { SearchType } from '~/utils/constant'
import type { IPlaylist } from '~/types'

const route = useRoute()
const emits = defineEmits(['count'])

const total = ref<number>(0)
const currentPage = ref<number>(1)
const playlists = ref<IPlaylist[]>([])

const searchCallback = async () => {
  const result = await getSearch({
    keywords: route.params.keywords as string,
    type: SearchType.playlist,
    offset: currentPage.value - 1,
  })
  total.value = result?.total
  playlists.value = result?.playlists || []

  emits('count', {
    playlist: total.value,
  })
}

watch(
  () => route.params,
  () => {
    searchCallback()
  }
)

onMounted(() => {
  searchCallback()
})
</script>
