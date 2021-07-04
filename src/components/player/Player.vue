<template>
  <div class="player">
    <!-- 播放标签 -->
    <audio
      ref="audio"
      :loop="true"
      :autoplay="true"
    />

    <!-- 歌词封面 -->
    <!-- <PlayerLyric
      :current-song="currentSong"
    /> -->

    <!-- 播放进度 -->
    <PlayerProgress
      v-model:currentTime="currentTime"
      :duration="duration"
    />

    <!-- 播放内容 -->
    <div class="player__left">
      <PlayerContent
        v-if="currentSong.id"
        :current-song="currentSong"
        :current-time="currentTime"
        :duration="duration"
      />
    </div>

    <!-- 控制器 -->
    <div class="player__center">
      <PlayerControl
        v-model:playing="playing"
      />
    </div>

    <!-- 音量控制 -->
    <div class="player__right">
      <PlayerVolume
        v-model:volume="volume"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useMediaControls } from '@vueuse/core'

// import PlayerLyric from '~/components/player/PlayerLyric.vue'
import PlayerProgress from '~/components/player/PlayerProgress.vue'
import PlayerContent from '~/components/player/PlayerContent.vue'
import PlayerControl from '~/components/player/PlayerControl.vue'
import PlayerVolume from '~/components/player/PlayerVolume.vue'
import type { ISong } from '~/types'

/**
 * 获取到播放地址
 */
const store = useStore()
const currentSong = computed<ISong>(() => store.state.player.currentSong)
const currentSongSrc = computed(() => currentSong.value.id ? `https://music.163.com/song/media/outer/url?id=${currentSong.value.id}.mp3` : '')

/**
 * @var playing  是否播放
 * @var currentTime 播放时间
 * @var duration 总时间
 * @var volume 音量
 */
const audio = ref<HTMLVideoElement>()
const { playing, currentTime, duration, volume } = useMediaControls(audio, {
  src: currentSongSrc,
})
</script>

<style lang="scss" scoped>
@include b(player) {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: $z-index-player;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 60px;
  padding: 5px 20px;
  background: #fff;

  $list: left,center,right;

  @include e($list) {
    display: flex;
    flex: 1;
    align-items: center;
    height: 50px;
  }

  @include e(center) {
    justify-content: center;
  }

  @include e(right) {
    justify-content: flex-end;
  }
}
</style>
