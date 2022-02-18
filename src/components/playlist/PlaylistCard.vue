<template>
  <div class="playlist-card" @click="goPlaylist">
    <div class="playlist-card__inner">
      <img v-lazy="thumbnail(playlist.picUrl, 190)" class="playlist-card__cover" />
      <div class="playlist-card__desc">
        <span class="desc">播放量：{{ formatCount(playlist.playCount) }}</span>
      </div>
      <div class="playlist-card__play">
        <Icon name="round-play-arrow" />
      </div>
    </div>
    <p class="playlist-card__name">
      {{ playlist.name }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { PropType, toRef } from 'vue'

import Icon from '~/components/base/Icon.vue'
import { thumbnail, formatCount } from '~/utils'
import type { IPlaylist } from '~/types'

const props = defineProps({
  playlist: {
    type: Object as PropType<IPlaylist>,
    required: true,
  },
})

const router = useRouter()
const playlist = toRef(props, 'playlist')

const goPlaylist = () => {
  router.push(`/playlist/${playlist.value.id}`)
}
</script>

<style lang="scss" scoped>
@include b(playlist-card) {
  position: relative;
  display: inline-block;
  width: calc(20% - 8px);
  margin: 4px;
  margin-bottom: 32px;
  cursor: pointer;

  &:hover {
    .playlist-card__desc {
      transform: translateY(0);
    }

    .playlist-card__play {
      opacity: 1;
    }
  }

  @include e(inner) {
    position: relative;
    width: 100%;
    padding-top: 100%;
    margin-bottom: 8px;
    overflow: hidden;
    border-radius: 4px;
  }

  @include e(cover) {
    width: 100%;
    height: 100%;

    @include abs-stretch;
  }

  @include e(desc) {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    padding: 6px;
    background-color: rgb(0 0 0 / 40%);
    transition: all 0.3s;
    transform: translateY(-100%);

    > span {
      font-size: 12px;
      color: #fff;
    }
  }

  @include e(name) {
    font-size: 12px;

    @include text-ellipsis();
  }

  @include e(play) {
    position: absolute;
    right: 8px;
    bottom: 8px;
    font-size: 24px;
    line-height: 22px;
    color: #d33a31;
    text-align: center;
    background: rgb(255 255 255 / 40%);
    opacity: 0;
    transition: all 0.3s;

    @include round(36px);
  }
}
</style>
