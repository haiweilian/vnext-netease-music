<template>
  <div class="result">
    <SongCard />
    <SongCard />
    <SongCard />
    <SongCard />
    <SongCard />
    <SongCard />
    <SongCard />
    <SongCard />
    <SongCard />
    <SongCard />
    <SongCard />
    <SongCard />
    <SongCard />
    <SongCard />
    <SongCard />
    <SongCard />
  </div>
  <div class="pagination">
    <ElPagination layout="prev, pager, next" :total="50" />
  </div>
</template>

<script setup lang="ts">
import { ElPagination } from 'element-plus'
import SongCard from '~/components/song/SongCard.vue'
</script>

<style lang="scss" scoped>
.pagination {
  margin-top: 20px;
  text-align: right;
}
</style>
