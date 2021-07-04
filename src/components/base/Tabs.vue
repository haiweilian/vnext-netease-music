<template>
  <ul class="tabs">
    <li
      v-for="tab of tabs"
      :key="tab.value"
      :class="['tabs__item', tab.value === currentValue ? 'is-active' : '']"
      @click="setCurrentValue(tab.value)"
    >
      {{ tab.label }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, toRef, defineProps, defineEmit, watch } from 'vue'
import type { PropType } from 'vue'
import type { ISingleTab } from '~/types'

// 定义接收和通知
const props = defineProps({
  tabs: {
    type: Object as PropType<ISingleTab[]>,
    required: true,
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
})
const tabs = toRef(props, 'tabs')
const emits = defineEmit(['update:modelValue', 'change'])

// 切换更新通知
const currentValue = ref<string | number>(props.modelValue)
const setCurrentValue = (value: string | number) => {
  currentValue.value = value
  emits('update:modelValue', currentValue.value)
  emits('change', currentValue.value)
}

// 监听赋值默认值
watch(() => props.modelValue, (modelValue) => {
  currentValue.value = modelValue
})
</script>

<style lang="scss" scoped>
@include b(tabs) {
  display: flex;
  justify-content: flex-end;
  list-style: none;

  @include e(item) {
    padding: 12px 0;
    margin: 0 12px;
    font-size: 12px;
    color: #7f7f81;
    white-space: nowrap;
    cursor: pointer;

    @include when(active) {
      color: #d33a31;
    }

    &:hover {
      color: #000;
    }
  }
}
</style>
