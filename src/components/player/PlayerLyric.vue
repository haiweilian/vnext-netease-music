<template>
  <teleport to="#app">
    <!-- 歌词封面 -->
    <div :class="{ 'is-hide': !lyricPageStatus }" class="player-lyric">
      <div class="player-lyric__content">
        <div class="player-lyric__song">
          <!-- 播放状态 -->
          <div class="player-cover">
            <img :src="PlayBarSupport" class="player-cover__support" />
            <img :src="PlayBar" class="player-cover__bar" :class="{ 'is-playing': playing }" />
            <div class="player-cover__cover">
              <div class="player-cover__inner" :class="{ 'is-paused': !playing }">
                <img :src="thumbnail(currentSong.picUrl, 400)" class="player-cover__image" />
              </div>
            </div>
          </div>
          <!-- 歌词信息 -->
          <div class="lyric">
            <div class="lyric__name">
              {{ currentSong.name }}
            </div>
            <div class="lyric__desc">
              <span class="label">歌手：</span>
              <div class="value">
                {{ currentSong.artists }}
              </div>
            </div>
            <div ref="scroller" class="scroller lyric__wrap">
              <div
                v-for="(line, index) of lines"
                :ref="setItemRef"
                :key="line.timestamp"
                class="lyric__item"
                :class="{ 'is-active': lineActive === index }"
              >
                <p class="lyric__text">
                  {{ line.content }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- 歌曲评论 -->
        <div class="player-lyric__comment">
          <Comment v-if="currentSong.id && lyricPageStatus" :id="currentSong.id" :type="CommentType.song" />
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { Lrc, Runner } from 'lrc-kit'
import type { Lyric } from 'lrc-kit'
import { computed, ref, toRef, watch } from 'vue'
import type { PropType } from 'vue'

import { getLyric } from '~/api/player'
import PlayBarSupport from '~/assets/image/play-bar-support.png'
import PlayBar from '~/assets/image/play-bar.png'
import Comment from '~/components/comment/Comment.vue'

import { usePlayerStore } from '~/store/modules/player'
import type { ISong } from '~/types'
import { thumbnail } from '~/utils'
import { CommentType } from '~/utils/constant'

const props = defineProps({
  playing: {
    type: Boolean,
    required: true,
  },
  currentTime: {
    type: Number,
    required: true,
  },
  currentSong: {
    type: Object as PropType<ISong>,
    required: true,
  },
})
const currentSong = toRef(props, 'currentSong')

/**
 * 是否展示歌词
 */
const playerStore = usePlayerStore()
const lyricPageStatus = computed<boolean>(() => playerStore.lyricPageStatus)

/**
 * 歌词解析并根据播放时间实时获取歌词行数。
 */
const lines = ref<Lyric[]>([])
const lineActive = ref<number>(0)
const lrcInstance = ref<Runner>()
const lyricCallback = async () => {
  lrcInstance.value = undefined
  const lyric = await getLyric({
    id: currentSong.value.id,
  })
  lrcInstance.value = new Runner(Lrc.parse(lyric.lrc.lyric))
  lines.value = lrcInstance.value.getLyrics()
}

watch(
  () => props.currentTime,
  (currentTime) => {
    if (lrcInstance.value) {
      lrcInstance.value.timeUpdate(currentTime)
      lineActive.value = lrcInstance.value.curIndex()
    }
  }
)

/**
 * 获取歌词列表 ref，在检测到当前行变化的时候，定位歌词到内容中间
 */
const scroller = ref()
const lyricLineRefs = ref<HTMLElement[]>([])
const setItemRef = (el: HTMLElement): void => {
  lyricLineRefs.value.push(el)
}

watch(lineActive, (num: number) => {
  const curDom = lyricLineRefs.value[num]
  scroller.value.scrollTop = curDom.offsetTop - 130 + curDom.offsetHeight / 2
})

/**
 * 歌曲变化时，重新请求歌词并初始化必要状态
 */
watch(currentSong, (currentSong) => {
  if (currentSong.id) {
    lyricCallback()
    lyricLineRefs.value = []
  }
})
</script>

<style lang="scss" scoped>
@keyframes player-rotate {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(1turn);
  }
}

@include b(player-lyric) {
  position: fixed;
  inset: 50px 0 63px;
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
    animation: player-rotate 20s linear infinite;

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
    position: relative;
    width: 380px;
    height: 260px;
    overflow-y: auto;
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
