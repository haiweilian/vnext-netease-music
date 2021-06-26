<template>
  <PlaylistIntro />
  <Tab />
  <div class="result">
    <PlaylistCard />
    <PlaylistCard />
    <PlaylistCard />
    <PlaylistCard />
    <PlaylistCard />
    <PlaylistCard />
    <PlaylistCard />
    <PlaylistCard />
    <PlaylistCard />
    <PlaylistCard />
    <PlaylistCard />
    <PlaylistCard />
    <PlaylistCard />
    <PlaylistCard />
    <PlaylistCard />
    <PlaylistCard />
    <PlaylistCard />
    <PlaylistCard />
    <PlaylistCard />
    <PlaylistCard />
    <PlaylistCard />
    <PlaylistCard />
    <PlaylistCard />
    <PlaylistCard />
    <PlaylistCard />
    <PlaylistCard />
    <PlaylistCard />
  </div>
  <div class="pagination">
    <ElPagination layout="prev, pager, next" :total="50" />
  </div>
</template>

<script setup lang="ts">
import { ElPagination } from 'element-plus'
import PlaylistIntro from './PlaylistIntro.vue'
import Tab from '~/components/tab/Tab.vue'
import PlaylistCard from '~/components/playlist/PlaylistCard.vue'
</script>

<style lang="scss" scoped>
.pagination {
  margin-top: 20px;
  text-align: right;
}
</style>
