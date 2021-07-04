<template>
  <!-- 头部导航 -->
  <Header />
  <!-- 左侧菜单 -->
  <Menu />
  <!-- 播放器 -->
  <Player />
  <!-- 内容区域 -->
  <main class="layout">
    <router-view />
  </main>
</template>

<script setup lang="ts">
import Header from '~/components/header/Header.vue'
import Menu from '~/components/menu/Menu.vue'
import Player from '~/components/player/Player.vue'
</script>

<style lang="scss" scoped>
@include b(layout) {
  width: calc(100vw - 250px);
  height: calc(100vh - 50px - 60px);
  padding: 20px 30px;
  margin: 50px 0 60px 250px;
  overflow-y: auto;
}
</style>
