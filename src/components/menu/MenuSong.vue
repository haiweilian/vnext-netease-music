<template>
  <div class="menu-scroll">
    <div class="menu-song">
      <p class="menu-song__title"></p>
      <ul class="">
        <li class="menu-song__item is-active">
          <IconSvg name="music" />
          <span class="menu-song__value">
            发现音乐
          </span>
        </li>
        <li class="menu-song__item">
          <IconSvg name="playlist" />
          <span class="menu-song__value">
            推荐歌单
          </span>
        </li>
        <li class="menu-song__item">
          <IconSvg name="song" />
          <span class="menu-song__value">
            最新音乐
          </span>
        </li>
      </ul>
    </div>
    <div class="menu-song">
      <p class="menu-song__title">
        收藏的歌单
      </p>
      <ul class="">
        <li class="menu-song__item">
          <IconSvg name="playlist" />
          <span class="menu-song__value">
            keep 跑步歌单『前方高能』
          </span>
        </li>
        <li class="menu-song__item">
          <IconSvg name="playlist" />
          <span class="menu-song__value">
            今天从《下山》听起 | 私人雷达
          </span>
        </li>
        <li class="menu-song__item">
          <IconSvg name="playlist" />
          <span class="menu-song__value">
            车上必听.HIFI 伤感情歌
          </span>
        </li>
        <li class="menu-song__item">
          <IconSvg name="playlist" />
          <span class="menu-song__value">
            21世纪头十年经典流行老歌
          </span>
        </li>
        <li class="menu-song__item">
          <IconSvg name="playlist" />
          <span class="menu-song__value">
            21世纪头十年经典流行老歌
          </span>
        </li>
        <li class="menu-song__item">
          <IconSvg name="playlist" />
          <span class="menu-song__value">
            21世纪头十年经典流行老歌
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconSvg from '~/components/icon/IconSvg.vue'
</script>

<style lang="scss" scoped>
@include b(menu-scroll) {
  flex: 1;
  overflow: hidden;
  overflow-y: auto;
}

@include b(menu-song) {
  margin-bottom: 15px;

  @include e(title) {
    padding: 0 15px;
    margin-bottom: 15px;
    font-size: 12px;
    color: #909090;
  }

  @include e(item) {
    display: flex;
    align-items: center;
    padding: 12px 15px;
    font-size: 13px;
    cursor: pointer;
    transition: background 0.1s;

    @include when(active) {
      color: #d33a31;
      background: #e7e7e7;
    }

    &:hover {
      background: #e7e7e7;
    }
  }

  @include e(value) {
    margin-left: 10px;
  }
}
</style>
