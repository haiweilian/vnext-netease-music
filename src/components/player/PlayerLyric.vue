<template>
  <teleport to="#app">
    <div class="player-lyric is-hide">
      <div class="player-lyric__content">
        <div class="player-lyric__song">
          <div class="player-cover">
            <img :src="PlayBarSupport" class="player-cover__support">
            <img :src="PlayBar" class="player-cover__bar is-playing">
            <div class="player-cover__cover">
              <div class="player-cover__inner">
                <img class="player-cover__image" src="https://p2.music.126.net/Yu--DIhsQSoei6XQTrSUNA==/109951163200168756.jpg?param=400y400">
              </div>
            </div>
          </div>
          <div class="lyric">
            <div class="lyric__name">
              日不落
            </div>
            <div class="lyric__desc">
              <span class="label">歌手：</span>
              <div class="value">
                蔡依林
              </div>
            </div>
            <div class="scroller lyric__wrap">
              <div class="lyric__item" style="pointer-events: auto;">
                <p class="lyric__text">
                  作词 : 崔惟楷
                </p>
              </div>
              <div class="lyric__item is-active" style="pointer-events: auto;">
                <p class="lyric__text">
                  作曲 : Alexander Bard/Magnus Bengt/Anders Hansson
                </p>
              </div>
              <div class="lyric__item" style="pointer-events: auto;">
                <p class="lyric__text">
                  编曲 : 林迈可
                </p>
              </div>
              <div class="lyric__item" style="pointer-events: auto;">
                <p class="lyric__text">
                  天空的雾来得漫不经心
                </p>
              </div>
              <div class="lyric__item" style="pointer-events: auto;">
                <p class="lyric__text">
                  河水像油画一样安静
                </p>
              </div>
              <div class="lyric__item" style="pointer-events: auto;">
                <p class="lyric__text">
                  和平鸽慵懒步伐押着韵
                </p>
              </div>
              <div class="lyric__item" style="pointer-events: auto;">
                <p class="lyric__text">
                  心偷偷的放晴
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="player-lyric__comment">
          <Comment />
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import PlayBar from '~/assets/image/play-bar.png'
import PlayBarSupport from '~/assets/image/play-bar-support.png'
import Comment from '~/components/comment/Comment.vue'
</script>

<style lang="scss" scoped>
@keyframes playerRotate {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(1turn);
  }
}

@include b(player-lyric) {
  position: fixed;
  top: 50px;
  right: 0;
  bottom: 63px;
  left: 0;
  z-index: $z-index-player-player;
  padding: 0 36px;
  overflow: hidden;
  overflow-y: auto;
  background: #f9f9f9;
  transition: transform 0.5s;

  @include when(hide) {
    transform: translateY(150%);
  }

  @include when(show) {
    transform: none;
  }

  @include e(content) {
    max-width: 870px;
    margin: auto;
  }

  @include e(song) {
    display: flex;
  }

  @include e(comment) {
    margin-top: 48px;
    margin-bottom: 36px;
  }
}

@include b(player-cover) {
  position: relative;
  display: flex;
  justify-content: center;
  padding: 80px 70px 0 36px;

  @include e(support) {
    position: absolute;
    top: -15px;
    left: 180px;
    z-index: 2;
    width: 30px;
    height: 30px;
  }

  @include e(bar) {
    position: absolute;
    top: 0;
    left: 190px;
    z-index: 1;
    width: 100px;
    height: 146px;
    transition: all 0.3s;
    transform: rotate(-30deg);
    transform-origin: 0 0;

    @include when(playing) {
      transform: rotate(5deg);
    }
  }

  @include e(cover) {
    @include round(320px);
    @include flex-center;

    background: #e6e5e6;
  }

  @include e(inner) {
    @include round(300px);
    @include flex-center;

    background: #000;
    background: linear-gradient(-45deg, #333540, #070708, #333540);
    animation: playerRotate 20s linear infinite;

    @include when(paused) {
      animation-play-state: paused;
    }
  }

  @include e(image) {
    @include round(200px);
  }
}

@include b(lyric) {
  flex: 1;
  padding-top: 45px;

  @include e(name) {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-size: 24px;
    color: #333;
  }

  @include e(desc) {
    display: flex;
    margin-right: 32px;
    margin-bottom: 30px;
    font-size: 12px;

    .label {
      display: inline-block;
      margin-right: 4px;
    }

    .value {
      color: #517eaf;
    }
  }

  @include e(wrap) {
    width: 380px;
    height: 350px;
    mask-image:
      linear-gradient(
        180deg,
        hsla(0, 0%, 100%, 0) 0,
        hsla(0, 0%, 100%, 0.6) 15%,
        #fff 25%,
        #fff 75%,
        hsla(0, 0%, 100%, 0.6) 85%,
        hsla(0, 0%, 100%, 0)
      );
  }

  @include e(item) {
    margin-bottom: 16px;
    font-size: 12px;

    @include when(active) {
      font-size: 14px;
      font-weight: 700;
      color: #333;
    }
  }

  @include e(text) {
    margin-bottom: 8px;
  }
}
</style>
