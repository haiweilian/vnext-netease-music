<template>
  <div class="player-control__prev">
    <ElTooltip content="暂未开发" placement="top">
      <Icon name="player-prev" size="22" />
    </ElTooltip>
  </div>
  <div class="player-control__play">
    <Icon :name="status" size="50" @click="changeStatus" />
  </div>
  <div class="player-control__next">
    <ElTooltip content="暂未开发" placement="top">
      <Icon name="player-next" size="22" />
    </ElTooltip>
  </div>
</template>

<script setup lang="ts">
import { ElTooltip } from 'element-plus'
import { computed } from 'vue'
import Icon from '~/components/base/Icon.vue'

const props = defineProps({
  playing: {
    type: Boolean,
    required: true,
  },
})
const emits = defineEmits(['update:playing'])

/**
 * 设置播放状态
 */
const status = computed(() => (props.playing ? 'player-pause' : 'player-play'))
const changeStatus = () => {
  emits('update:playing', !props.playing)
}
</script>

<style lang="scss" scoped>
@include b(player-control) {
  @include e(prev) {
    color: #d33a31;
  }

  @include e(next) {
    color: #d33a31;
  }

  @include e(play) {
    margin: 0 10px;
    color: #d33a31;
    cursor: pointer;
  }
}
</style>
