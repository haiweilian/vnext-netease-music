<template>
  <ul class="tab tab--right">
    <li class="tab__item active">
      <span class="title">全部</span>
    </li>
    <li class="tab__item">
      <span class="title">欧美</span>
    </li>
    <li class="tab__item">
      <span class="title">华语</span>
    </li>
    <li class="tab__item">
      <span class="title">流行</span>
    </li>
    <li class="tab__item">
      <span class="title">说唱</span>
    </li>
    <li class="tab__item">
      <span class="title">摇滚</span>
    </li>
    <li class="tab__item">
      <span class="title">民谣</span>
    </li>
  </ul>
</template>

<script setup lang="ts">

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

    &.active {
      color: #d33a31;
    }

    &:hover {
      color: #000;
    }
  }
}
</style>
