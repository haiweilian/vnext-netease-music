<template>
  <h6 class="title">
    推荐歌单
  </h6>
  <div class="content">
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
</template>

<script setup lang="ts">
import PlaylistCard from '~/components/playlist/PlaylistCard.vue'
</script>

<style lang="scss" scoped>
.title {
  padding: 10px 0;
  font-size: 18px;
  font-weight: normal;
  color: #333;
}
</style>
