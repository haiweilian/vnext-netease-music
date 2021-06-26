<template>
  <div class="playlist-card">
    <div class="playlist-card__inner">
      <img class="playlist-card__cover" src="https://p2.music.126.net/NwkGak0zTrC0pI2NdEgABw==/109951165931374927.jpg?param=300y300" />
      <div class="playlist-card__desc">
        <span class="desc">描述描述描述</span>
      </div>
      <div class="playlist-card__play">
        <icon-ic:round-play-arrow />
      </div>
    </div>
    <p class="playlist-card__name">
      欧美 | 爱情里的猫鼠游戏
    </p>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@include b(playlist-card) {
  position: relative;
  display: inline-block;
  width: calc(20% - 8px);
  margin: 4px;
  margin-bottom: 32px;
  cursor: pointer;

  &:hover {
    .playlist-card__desc {
      transform: translateY(0);
    }

    .playlist-card__play {
      opacity: 1;
    }
  }

  @include e(inner) {
    position: relative;
    width: 100%;
    padding-top: 100%;
    margin-bottom: 8px;
    overflow: hidden;
    border-radius: 4px;
  }

  @include e(cover) {
    width: 100%;
    height: 100%;

    @include abs-stretch;
  }

  @include e(desc) {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    padding: 6px;
    background-color: rgba(0, 0, 0, 0.4);
    transition: all 0.3s;
    transform: translateY(-100%);

    > span {
      font-size: 12px;
      color: #fff;
    }
  }

  @include e(name) {
    font-size: 12px;

    @include text-ellipsis();
  }

  @include e(play) {
    position: absolute;
    right: 8px;
    bottom: 8px;
    font-size: 24px;
    color: #d33a31;
    text-align: center;
    background: rgba(255, 255, 255, 0.4);
    opacity: 0;
    transition: all 0.3s;

    @include round(36px);
  }
}
</style>
