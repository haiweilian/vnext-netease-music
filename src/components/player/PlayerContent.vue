<template>
  <div class="player-content__playimg" @click="togglePlayer">
    <img class="player-content__blur" :src="thumbnail(props.currentSong.picUrl, 40)" />
    <div class="player-content__mask"></div>
    <Icon :name="iconStatus" class="player-content__control" size="22" />
  </div>
  <div class="player-content__playcon" @click="togglePlayer">
    <div class="player-content__name">
      <span class="">{{ props.currentSong.name }}</span>
      <span class="">-</span>
      <span class="">{{ props.currentSong.artists }}</span>
    </div>
    <div class="player-content__time">
      <span class="">{{ dayjs.duration(props.currentTime, 'seconds').format('mm:ss') }}</span>
      <span class="">/</span>
      <span class="">{{ dayjs.duration(props.duration, 'seconds').format('mm:ss') }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import { computed } from 'vue'
import type { PropType } from 'vue'

import Icon from '~/components/base/Icon.vue'
import { thumbnail } from '~/utils'
import { usePlayerStore } from '~/store/modules/player'
import type { ISong } from '~/types'

const props = defineProps({
  currentSong: {
    type: Object as PropType<ISong>,
    required: true,
  },
  currentTime: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
})

const playerStore = usePlayerStore()

/**
 * 打开或关闭歌词
 */
const iconStatus = computed<string>(() => (playerStore.lyricPageStatus ? 'shrink' : 'expand'))
const togglePlayer = () => {
  playerStore.setLyricPageStatus()
}
</script>

<style lang="scss" scoped>
@include b(player-content) {
  @include e(playimg) {
    position: relative;
    width: 40px;
    height: 40px;
    margin-right: 10px;
    overflow: hidden;
    cursor: pointer;
    border-radius: 5px;
  }

  @include e(blur) {
    width: 40px;
    height: 40px;
  }

  @include e(mask) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgb(0 0 0 / 20%);
  }

  @include e(control) {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 50px;
    font-weight: bold;
    color: #fff;
    transform: translate(-50%, -50%);
  }

  @include e(playcon) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    font-size: 12px;
  }

  @include e(time) {
    span:nth-of-type(1),
    span:nth-of-type(3) {
      display: inline-block;
      min-width: 40px;
    }

    span:nth-of-type(2) {
      display: inline-block;
      margin-right: 8px;
    }
  }

  @include e(name) {
    span:nth-of-type(1) {
      font-size: 13px;
      font-weight: 500;
      color: #333;
    }

    span:nth-of-type(2) {
      display: inline-block;
      margin-right: 5px;
      margin-left: 5px;
    }
  }
}
</style>
