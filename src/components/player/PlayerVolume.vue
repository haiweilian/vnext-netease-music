<template>
  <div class="player-volume">
    <Icon :name="volumeStatusName" size="20" @click="changeVolumeStatus" />
    <ElSlider
      v-model="volumeRef"
      :min="0"
      :max="1"
      :step="0.01"
      :show-tooltip="false"
      class="player-volume__slider"
      @input="changeVolume"
    />
  </div>
</template>

<script setup lang="ts">
import { ElSlider } from 'element-plus'
import { ref, watch, computed, onMounted } from 'vue'
import Icon from '~/components/base/Icon.vue'

const props = defineProps({
  volume: {
    type: Number,
    required: true,
  },
})
const emits = defineEmits(['update:volume'])

/**
 * 改变音量更新值
 */
const volumeRef = ref<number>(0.75)
const changeVolume = () => {
  emits('update:volume', volumeRef.value)
}

/**
 * 切换静音时保存现有音量
 */
const volumeCache = ref<number>(0)
const volumeStatus = ref<boolean>(true)
const volumeStatusName = computed(() => (volumeStatus.value ? 'volume-up' : 'volume-off'))
const changeVolumeStatus = () => {
  volumeStatus.value = !volumeStatus.value
  if (volumeStatus.value) {
    volumeRef.value = volumeCache.value
  } else {
    volumeCache.value = volumeRef.value
    volumeRef.value = 0
  }
}

onMounted(() => {
  changeVolume()
})

watch(
  () => props.volume,
  (newv) => {
    volumeRef.value = newv
  }
)
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
