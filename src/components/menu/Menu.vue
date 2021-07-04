<template>
  <div class="menu">
    <!-- 用户信息 -->
    <MenuUser />
    <!-- 用户歌单 -->
    <MenuSong />
  </div>
</template>

<script setup lang="ts">
import MenuUser from '~/components/menu/MenuUser.vue'
import MenuSong from '~/components/menu/MenuSong.vue'
</script>

<style lang="scss" scoped>
@include b(menu) {
  position: fixed;
  top: 50px;
  bottom: 60px;
  left: 0;
  z-index: $z-index-menu;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: calc(100vh - 50px - 60px);
  background: #ededed;
}
</style>
