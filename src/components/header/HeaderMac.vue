<template>
  <div class="mac-icon">
    <span class="mac-icon__item mac-icon--red">
      <!-- <icon-ic:round-home /> -->
    </span>
    <span class="mac-icon__item mac-icon--green">
      <!-- <icon-ic:round-minus /> -->
    </span>
    <span class="mac-icon__item mac-icon--yellow">
      <!-- <icon-ic:round-fullscreen /> -->
    </span>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@include b(mac-icon) {
  display: flex;
  align-items: center;
  padding: 0 10px;

  @include e(item) {
    margin-right: 10px;
    cursor: pointer;

    @include round(13px);
  }

  @include m(red) {
    background: #ed655a;
  }

  @include m(green) {
    background: #72be47;
  }

  @include m(yellow) {
    background: #e0c04c;
  }
}
</style>
