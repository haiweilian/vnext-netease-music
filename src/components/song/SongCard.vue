<template>
  <div class="song-card">
    <div class="song-card__order">
      <span class="order">01</span>
    </div>
    <div class="song-card__cover">
      <img class="" src="http://p4.music.126.net/Ggpf7jURLCUKKlT4qAUW4Q==/109951165929809633.jpg?param=120y120" />
    </div>
    <div class="song-card__text">
      寿阳曲·清江引·塞鸿秋
    </div>
    <div class="song-card__text">
      24kGoldn/iann dior/Lil Ghost小鬼
    </div>
    <div class="song-card__text">
      Mood (Lil Ghost Remix)
    </div>
    <div class="song-card__time">
      04:45
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@include b(song-card) {
  display: flex;
  align-items: center;
  padding: 8px 0;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
  }

  @include e(order) {
    width: 60px;
    color: #bebebe;

    @include flex-center();
  }

  @include e(cover) {
    position: relative;
    width: 60px;
    height: 60px;
    margin-right: 8px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  @include e(text) {
    flex: 1;
    margin-left: 20px;

    @include text-ellipsis;
  }

  @include e(time) {
    width: 60px;

    @include text-ellipsis;
  }
}
</style>
