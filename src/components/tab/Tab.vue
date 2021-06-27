<template>
  <ul class="tab tab--right">
    <li
      v-for="tab of props.tab"
      :key="tab.value"
      :class="['tab__item', tab.value === currentValue ? 'active' : '']"
      @click="setCurrentValue(tab.value)"
    >
      <span class="title">{{ tab.label }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmit, watchEffect } from 'vue'
import type { PropType } from 'vue'
import type { ISingleTab } from '~/types'

// 定义接受和发布
const emits = defineEmit(['update:modelValue', 'change'])
const props = defineProps({
  tab: {
    type: Object as PropType<ISingleTab[]>,
    required: true,
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
})

// 切换更新通知
const currentValue = ref<string | number>('')
const setCurrentValue = (value: string | number) => {
  currentValue.value = value
  emits('update:modelValue', currentValue.value)
  emits('change', currentValue.value)
}

// 监听赋值默认值
watchEffect(() => {
  currentValue.value = props.modelValue
})
</script>

<style lang="scss" scoped>
@include b(tab) {
  display: flex;
  list-style: none;

  @include m(center) {
    justify-content: center;
  }

  @include m(right) {
    justify-content: flex-end;
  }

  @include e(item) {
    padding: 12px 0;
    margin: 0 12px;
    font-size: 12px;
    color: #7f7f81;
    white-space: nowrap;
    cursor: pointer;

    &:hover {
      color: #000;
    }

    &.active {
      color: #d33a31;
    }
  }
}
</style>
