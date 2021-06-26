<template>
  <div class="player-volume">
    <IconSvg name="volume-off" size="20" />
    <ElSlider v-model="slider" class="player-volume__slider" />
  </div>
</template>

<script setup lang="ts">
import { ElSlider } from 'element-plus'
import { ref } from 'vue'
import IconSvg from '~/components/icon/IconSvg.vue'
const slider = ref(50)
</script>

<style lang="scss" scoped>
@include b(player-volume) {
  position: relative;
  display: flex;
  align-items: center;
  width: 200px;

  @include e(icon) {
    font-size: 20px;
    cursor: pointer;
    transform: translateY(-0%) !important;
  }

  @include e(slider) {
    width: 150px;
    margin-left: 10px;
  }
}
</style>
