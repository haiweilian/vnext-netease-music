<template>
  <div class="song-card" @click="setCurrentPlaySong">
    <div class="song-card__order">
      <span class="order">{{ padZero(song.order) }}</span>
    </div>
    <div v-if="song.picUrl" class="song-card__cover">
      <img v-lazy="thumbnail(song.picUrl, 60)" class="" />
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
      {{ dayjs.duration(song.duration).format('mm:ss') }}
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import { defineProps } from 'vue'
import { useStore } from 'vuex'
import type { PropType } from 'vue'

import { SET_CURRENT_SONG } from '~/store/modules/player'
import { thumbnail, padZero } from '~/utils'
import type { ISong } from '~/types'

const { song } = defineProps({
  song: {
    type: Object as PropType<ISong>,
    required: true,
  },
})

// 设置播放的音乐
const store = useStore()
const setCurrentPlaySong = () => {
  store.commit(SET_CURRENT_SONG, song)
}
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
