<template>
  <div class="player-progress slider-hover-button">
    <ElSlider
      v-model="progress"
      :min="0"
      :max="duration"
      :show-tooltip="false"
      class="hover-button"
      @input="changeProgress"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { ElSlider } from 'element-plus'

const props = defineProps({
  currentTime: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
})
const emits = defineEmits(['update:currentTime'])

/**
 * 改变播放时间
 */
const progress = ref<number>(0)
const changeProgress = () => {
  emits('update:currentTime', progress.value)
}

watch(
  () => props.currentTime,
  (currentTime) => {
    progress.value = currentTime
  }
)
</script>

<style lang="scss" scoped>
@include b(player-progress) {
  position: absolute;
  top: -9px;
  left: 0;
  width: 100%;
  padding: 10px 0;

  /* stylelint-disable-next-line selector-pseudo-element-no-unknown */
  ::v-deep(.el-slider) {
    height: 0;
  }
}
</style>
