<template>
  <h6 class="title">
    最新音乐
  </h6>
  <div class="content">
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
</template>

<script setup lang="ts">
import SongCard from '~/components/song/SongCard.vue'
</script>

<style lang="scss" scoped>
.title {
  padding: 10px 0;
  font-size: 18px;
  font-weight: normal;
  color: #333;
}
</style>
