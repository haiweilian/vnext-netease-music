<template>
  <div class="player-control__prev">
    <IconSvg name="player-prev" size="22" />
  </div>
  <div class="player-control__play">
    <IconSvg name="player-pause" size="50" />
  </div>
  <div class="player-control__next">
    <IconSvg name="player-next" size="22" />
  </div>
</template>

<script setup lang="ts">
import IconSvg from '~/components/icon/IconSvg.vue'
</script>

<style lang="scss" scoped>
@include b(player-control) {
  @include e(prev) {
    color: #d33a31;
    cursor: pointer;
  }

  @include e(next) {
    color: #d33a31;
    cursor: pointer;
  }

  @include e(play) {
    margin: 0 10px;
    color: #d33a31;
    cursor: pointer;
  }
}
</style>
