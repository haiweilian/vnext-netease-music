<template>
  <div v-show="playlist.id" class="intro-card">
    <div class="intro-card__wrapper">
      <div class="intro-card__cover">
        <img :src="playlist.picUrl" />
      </div>
      <div class="intro-card__content">
        <div class="intro-card__tag">精品歌单</div>
        <p class="intro-card__name">
          {{ playlist.name }}
        </p>
        <p class="intro-card__desc">
          {{ playlist.description }}
        </p>
      </div>
    </div>
    <div class="intro-card__bg" :style="`background-image: url(${playlist.picUrl});`"></div>
    <div class="intro-card__bgmask"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import { getTopPlaylistHighquality } from '~/api/playlist'
import type { IPlaylist } from '~/types'

const playlist = ref<IPlaylist>({} as IPlaylist)

onMounted(async () => {
  const { playlists } = await getTopPlaylistHighquality({ limit: 1 })
  if (playlists.length) {
    playlist.value = playlists[0]
  }
})
</script>

<style lang="scss" scoped>
@include b(intro-card) {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 4px;

  @include e(bg) {
    z-index: 0;
    filter: blur(16px);

    @include abs-stretch;
  }

  @include e(bgmask) {
    z-index: 0;
    background-color: rgb(0 0 0 / 50%);

    @include abs-stretch;
  }

  @include e(wrapper) {
    position: relative;
    z-index: 1;
    display: flex;
    padding: 16px;
  }

  @include e(cover) {
    flex-shrink: 0;
    width: 140px;
    height: 140px;
    margin-right: 8px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  @include e(content) {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
  }

  @include e(tag) {
    align-self: flex-start;
    padding: 4px 15px;
    margin-bottom: 10px;
    font-size: 13px;
    color: #e7aa5a;
    border: 1px solid #e7aa5a;
    border-radius: 4px;
  }

  @include e(name) {
    margin-bottom: 8px;
    font-size: 16px;
    color: #fff;
  }

  @include e(desc) {
    font-size: 12px;
    line-height: 14px;
    color: rgb(255 255 255 / 50%);

    @include text-ellipsis-multi(5);
  }
}
</style>
