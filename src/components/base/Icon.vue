<template>
  <svg :style="getStyle" class="icon" aria-hidden="true">
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CSSProperties } from 'vue'

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon',
  },
  name: {
    type: String,
    required: true,
  },
  size: {
    type: [Number, String],
    default: 16,
  },
})

/**
 * see https://github.com/anncwb/vite-plugin-svg-icons
 */
const symbolId = computed(() => `#${props.prefix}-${props.name}`)
const getStyle = computed((): CSSProperties => {
  const { size } = props
  let s = `${size}`
  s = `${s.replace('px', '')}px`
  return {
    width: s,
    height: s,
  }
})
</script>

<style lang="scss" scoped>
@include b(icon) {
  display: inline-block;
  overflow: hidden;
  vertical-align: -0.3em;
  fill: currentcolor;
}
</style>
