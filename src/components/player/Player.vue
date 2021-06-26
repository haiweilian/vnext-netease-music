<template>
  <div class="player">
    <PlayerLyric />
    <PlayerAudio />
    <PlayerProgress />
    <div class="player__left">
      <PlayerContent />
    </div>
    <div class="player__center">
      <PlayerControl />
    </div>
    <div class="player__right">
      <PlayerVolume />
    </div>
  </div>
</template>

<script setup lang="ts">
import PlayerLyric from '~/components/player/PlayerLyric.vue'
import PlayerAudio from '~/components/player/PlayerAudio.vue'
import PlayerProgress from '~/components/player/PlayerProgress.vue'
import PlayerContent from '~/components/player/PlayerContent.vue'
import PlayerControl from '~/components/player/PlayerControl.vue'
import PlayerVolume from '~/components/player/PlayerVolume.vue'
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
