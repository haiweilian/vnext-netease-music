<template>
  <div class="player-progress slider-hover-button">
    <ElSlider v-model="slider" class="hover-button" />
  </div>
</template>

<script setup lang="ts">
import { ElSlider } from 'element-plus'
import { ref } from 'vue'
const slider = ref(50)
</script>

<style lang="scss" scoped>
@include b(player-progress) {
  position: absolute;
  top: -13px;
  left: 0;
  width: 100%;
  padding: 10px 0;
}
</style>
