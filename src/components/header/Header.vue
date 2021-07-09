<template>
  <div class="header">
    <div class="header__left">
      <HeaderMac />
      <HeaderHistory />
    </div>
    <div class="header__right">
      <HeaderSearch />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderMac from './HeaderMac.vue'
import HeaderHistory from './HeaderHistory.vue'
import HeaderSearch from './HeaderSearch.vue'
</script>

<style lang="scss" scoped>
@include b(header) {
  position: fixed;
  top: 0;
  left: 0;
  z-index: $z-index-header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 50px;
  background: #f9f9f9;

  @include e(left) {
    display: flex;
    justify-content: space-between;
    width: 250px;
  }

  @include e(right) {
    display: flex;
    padding-right: 30px;
  }
}
</style>
