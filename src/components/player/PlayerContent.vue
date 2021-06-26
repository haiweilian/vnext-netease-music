<template>
  <div class="player-content__playimg" @click="togglePlayer">
    <img class="player-content__blur" src="https://p2.music.126.net/Uy-J-k8zSIiJds-gKqZUhA==/109951165416660748.jpg?param=80y80">
    <div class="player-content__mask"></div>
    <IconSvg name="shrink" class="player-content__control" size="22" />
  </div>
  <div class="player-content__playcon">
    <div class="player-content__name">
      <span class="">Keep You Head Up Princess</span>
      <span class="">-</span>
      <span class="">Anson Seabra</span>
    </div>
    <div class="player-content__time">
      <span class="">00:00</span>
      <span class="">/</span>
      <span class="">03:20</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconSvg from '~/components/icon/IconSvg.vue'
const togglePlayer = () => {
  document.querySelector('.player-lyric')?.classList.toggle('is-hide')
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
    background: rgba(0, 0, 0, 0.2);
  }

  @include e(control) {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 50px;
    font-weight: bold;
    color: #fff;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  @include e(playcon) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    font-size: 12px;
  }

  @include e(name) {
    span:nth-of-type(1) {
      font-size: 13px;
      font-weight: 500;
      color: #333;
    }
  }
}
</style>
