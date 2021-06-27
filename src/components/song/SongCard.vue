<template>
  <div class="song-card">
    <div class="song-card__order">
      <span class="order">{{ song.order }}</span>
    </div>
    <div class="song-card__cover">
      <img class="" :src="song.picUrl" />
    </div>
    <div class="song-card__text">
      {{ song.name }}
    </div>
    <div class="song-card__text">
      {{ song.artists }}
    </div>
    <div class="song-card__text">
      {{ song.album }}
    </div>
    <div class="song-card__time">
      {{ song.duration }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { PropType } from 'vue'
import type { ISong } from '~/types'

const { song } = defineProps({
  song: {
    type: Object as PropType<ISong>,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
@include b(song-card) {
  display: flex;
  align-items: center;
  padding: 8px 0;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
  }

  @include e(order) {
    width: 60px;
    color: #bebebe;

    @include flex-center();
  }

  @include e(cover) {
    position: relative;
    width: 60px;
    height: 60px;
    margin-right: 8px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  @include e(text) {
    flex: 1;
    margin-left: 20px;

    @include text-ellipsis;
  }

  @include e(time) {
    width: 60px;

    @include text-ellipsis;
  }
}
</style>
