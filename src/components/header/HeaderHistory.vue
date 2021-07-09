<template>
  <div class="history">
    <span class="history__item history__item--back">
      <ElTooltip content="暂未开发">
        <Icon name="arrow-back" />
      </ElTooltip>
    </span>
    <span class="history__item history__item--forward">
      <ElTooltip content="暂未开发">
        <Icon name="arrow-forward" />
      </ElTooltip>
    </span>
  </div>
</template>

<script setup lang="ts">
import { ElTooltip } from 'element-plus'
import Icon from '~/components/base/Icon.vue'
</script>

<style lang="scss">
@include b(history) {
  display: flex;
  margin-left: 30px;

  @include e(item) {
    width: 25px;
    height: 25px;
    margin-right: 20px;
    text-align: center;
    cursor: pointer;
  }
}
</style>
