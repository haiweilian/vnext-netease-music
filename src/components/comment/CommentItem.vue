<template>
  <div class="comment">
    <div class="comment__avatar">
      <img src="https://p3.music.126.net/mRTBEk1BobVhcOZKvqNHQA==/18600438207459189.jpg?param=80y80">
    </div>
    <div class="comment__content is-border">
      <div class="comment__text">
        <span class="username">SUSJAVY:</span>
        <span class="text">九零后那慢慢的回忆，当初差不多就是听着这里面的歌曲长大的</span>
      </div>
      <div class="comment__info">
        <span class="date">2016-02-17 13:02:10</span>
        <div class="actions">
          <IconSvg name="thumb" />
          <span>2881</span>
        </div>
      </div>
    </div>
  </div>
  <div class="comment">
    <div class="comment__avatar">
      <img src="https://p3.music.126.net/blIgbRCO9XCji4xRLwdxAg==/18967675091172056.jpg?param=80y80">
    </div>
    <div class="comment__content is-border">
      <div class="comment__text">
        <span class="username">李沐暄:</span><span class="text">我也是亳州的</span>
      </div>
      <div class="comment__replied">
        <div class="comment__text">
          <span class="username">亳州市最后的老实人:</span>
          <span class="text">21世纪头十年...再过一个多月就头二十年了[流泪]</span>
        </div>
      </div>
      <div class="comment__info">
        <span class="date">2020-06-29 18:48:38</span>
        <div class="actions">
          <IconSvg name="thumb" />
          <span>2881</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconSvg from '~/components/icon/IconSvg.vue'
</script>

<style lang="scss" scoped>
@include b(comment) {
  display: flex;
  padding-top: 20px;

  @include e(avatar) {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    margin-right: 12px;

    img {
      @include round(100%);
    }
  }

  @include e(content) {
    width: 100%;
    padding-bottom: 20px;
    font-size: 12px;

    @include when(border) {
      border-bottom: 1px solid #f2f2f1;
    }
  }

  @include e(replied) {
    padding: 8px;
    margin-top: 8px;
    background: #e6e5e6;
    border-radius: 4px;
  }

  @include e(text) {
    .username {
      display: inline-block;
      margin-right: 4px;
      color: #517eaf;
    }

    .text {
      line-height: 1.5;
    }
  }

  @include e(info) {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;

    .date {
      color: #bebebe;
    }

    .actions {
      color: #bebebe;

      span {
        margin-left: 5px;
      }
    }
  }
}
</style>
