<template>
  <teleport to="#app">
    <div v-show="lyricPageStatus" class="player-lyric">
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
            <div ref="listRef" class="scroller lyric__wrap">
              <div v-for="(line, index) of lines" :ref="setItemRef" :key="line.time" class="lyric__item" :class="{'is-active': linexxx === index}">
                <p class="lyric__text">
                  {{ line.txt }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="player-lyric__comment">
          <Comment v-if="props.currentSong.id" :id="props.currentSong.id" :type="CommentType.song" />
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { computed, defineProps, ref, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
import Lyric from 'lyric-parser'
import type { PropType } from 'vue'

import PlayBar from '~/assets/image/play-bar.png'
import PlayBarSupport from '~/assets/image/play-bar-support.png'
import Comment from '~/components/comment/Comment.vue'
import { getLyric } from '~/api/player'
import { CommentType } from '~/utils/constant'
import type { ISong } from '~/types'

const props = defineProps({
  currentSong: {
    type: Object as PropType<ISong>,
    required: true,
  },
})

/**
 * 是否展示歌词
 */
const store = useStore()
const lyricPageStatus = computed<boolean>(() => store.state.player.lyricPageStatus)

/**
 * 歌词处理
 */
const linexxx = ref(-1)
const lines = ref<any>([])
onMounted(async() => {
  const res = await getLyric({
    id: 1855423946,
  })
  console.log('11111', res)

  lines.value = res.lines

  function hanlder({ lineNum, txt }: any) {
    console.log(lineNum, txt)
    linexxx.value = lineNum
  // this hanlder called when lineNum change
  }
  const lyric = new Lyric(res.lrc.lyric, hanlder)

  lines.value = lyric.lines
  console.log('222', lyric)
  lyric.play()
})

const listRef = ref()
const lyricLineRefs = ref<HTMLElement[]>([])

/**
     * 给歌词列表动态分配ref
     */
const setItemRef = (el: HTMLElement): void => {
  lyricLineRefs.value.push(el)
}

watch(linexxx,
  (lineNum: number) => {
    const listDom = listRef.value as HTMLElement
    if (!listDom || !lineNum) return
    if (lineNum > 4) {
      const curLineDom = lyricLineRefs.value[lineNum - 4]
      listDom.scrollTop = curLineDom.offsetTop
    }
    else {
      listDom.scrollTop = 0
    }
  },
)
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
    height: 220px;
    overflow: hidden;
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
