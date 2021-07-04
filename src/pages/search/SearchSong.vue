<template>
  <div class="result">
    <SongCard
      v-for="song of songs"
      :key="song.id"
      :song="song"
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

import SongCard from '~/components/song/SongCard.vue'
import { getSearch } from '~/api/search'
import { SearchType } from '~/utils/constant'
import type { ISong } from '~/types'

const route = useRoute()
const emits = defineEmit(['count'])
const total = ref<number>(0)
const currentPage = ref<number>(1)
const songs = ref<ISong[]>([])

const search = async() => {
  const result = await getSearch({
    keywords: route.params.keywords as string,
    type: SearchType.single,
    offset: currentPage.value - 1,
  })
  total.value = result?.total
  songs.value = result?.songs || []
  emits('count', total.value)
}

onMounted(() => {
  search()
})
</script>
