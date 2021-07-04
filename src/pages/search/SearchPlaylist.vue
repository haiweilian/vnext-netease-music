<template>
  <div class="result">
    <PlaylistCard
      v-for="playlist of playlists"
      :key="playlist.id"
      :playlist="playlist"
    />
  </div>
  <ElPagination
    v-model:currentPage="currentPage"
    layout="prev, pager, next"
    :total="total"
    @current-change="search"
  />
</template>

<script setup lang="ts">
import { ElPagination } from 'element-plus'
import { onMounted, ref, defineEmit } from 'vue'
import { useRoute } from 'vue-router'

import PlaylistCard from '~/components/playlist/PlaylistCard.vue'
import { getSearch } from '~/api/search'
import { SearchType } from '~/utils/constant'
import type { IPlaylist } from '~/types'

const route = useRoute()
const emits = defineEmit(['count'])
const total = ref<number>(0)
const currentPage = ref<number>(1)
const playlists = ref<IPlaylist[]>([])

const search = async() => {
  const result = await getSearch({
    keywords: route.params.keywords as string,
    type: SearchType.playlist,
    offset: currentPage.value - 1,
  })
  total.value = result?.total
  playlists.value = result?.playlists || []
  emits('count', total.value)
}

onMounted(() => {
  search()
})
</script>
