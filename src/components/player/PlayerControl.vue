<template>
  <div class="player-control__prev">
    <Icon name="player-prev" size="22" />
  </div>
  <div class="player-control__play">
    <Icon :name="status" size="50" @click="changeStatus" />
  </div>
  <div class="player-control__next">
    <Icon name="player-next" size="22" />
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmit } from 'vue'
import Icon from '~/components/base/Icon.vue'

const props = defineProps({
  playing: {
    type: Boolean,
    required: true,
  },
})

const emits = defineEmit(['update:playing'])

const status = computed(() => props.playing ? 'player-pause' : 'player-play')
const changeStatus = () => {
  emits('update:playing', !props.playing)
}

</script>

<style lang="scss" scoped>
@include b(player-control) {
  @include e(prev) {
    color: #d33a31;
    cursor: not-allowed;
  }

  @include e(next) {
    color: #d33a31;
    cursor: not-allowed;
  }

  @include e(play) {
    margin: 0 10px;
    color: #d33a31;
    cursor: pointer;
  }
}
</style>
