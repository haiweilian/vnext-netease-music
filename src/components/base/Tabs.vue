<template>
  <ul class="tabs">
    <li
      v-for="tab of tabs"
      :key="tab.value"
      :class="['tabs__item', tab.value === currentValue ? 'is-active' : '']"
      @click="setCurrentValue(tab.value)"
    >
      <span>{{ tab.label }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, toRef, watch } from 'vue'
import type { PropType } from 'vue'
import type { ISingleTab } from '~/types'

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
const emits = defineEmits(['update:modelValue', 'change'])

/**
 * 切换通知更新值和事件
 */
const currentValue = ref<string | number>(props.modelValue)
const setCurrentValue = (value: string | number) => {
  currentValue.value = value
  emits('update:modelValue', currentValue.value)
  emits('change', currentValue.value)
}

/**
 * 监听绑定值赋值默认值
 */
watch(
  () => props.modelValue,
  (modelValue) => {
    currentValue.value = modelValue
  }
)
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
