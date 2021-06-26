<template>
  <Header />
  <Menu />
  <Player />
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
