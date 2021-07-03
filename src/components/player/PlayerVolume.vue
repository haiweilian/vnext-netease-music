<template>
  <div class="player-volume">
    <IconSvg name="volume-off" size="20" @click="changeVolume" />
    <ElSlider
      v-model="slider"
      :min="0"
      :max="1"
      :step="0.01"
      class="player-volume__slider"
      @input="changeSlider"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmit, watchEffect } from 'vue'
import { ElSlider } from 'element-plus'
import type { PropType } from 'vue'

import IconSvg from '~/components/icon/IconSvg.vue'
import type { ISong } from '~/types'

defineProps({
  currentSong: {
    type: Object as PropType<ISong>,
    required: true,
  },
  volume: {
    type: Number,
    required: true,
  },
})

const emits = defineEmit(['update:volume'])

const slider = ref(0)
const changeSlider = () => {
  emits('update:volume', slider.value)
}

// watch(() => props.volume, (newv, oldv) => {
//   console.log('22222', newv, oldv)
//   slider.value = props.currentTime
// })

// const volumeStatus = false
const changeVolume = () => {
  // if(slider)
}

watchEffect(() => {
  // slider.value = Math.round(props.currentTime / props.duration * 100)
})
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
