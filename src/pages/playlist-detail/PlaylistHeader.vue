<template>
  <div class="detail-header">
    <div class="detail-header__cover">
      <img src="https://p1.music.126.net/1pLqU2jsPzA3JPc2vjz_sQ==/3315027558816913.jpg?param=400y400">
    </div>
    <div class="detail-header__content">
      <div>
        <div class="detail-header__title">
          21世纪头十年经典流行老歌
        </div>
        <div class="detail-header__creator">
          <img class="avatar" src="http://p1.music.126.net/4ZjO1oj0WTeN5U19FpnQFw==/109951165005238078.jpg">
          <p class="creator">
            云音乐私人雷达
          </p>
          <p class="time">
            2019-12-26 创建
          </p>
        </div>
      </div>
      <div class="detail-header__desc">
        <p class="desc">
          标签：怀旧/经典/流行
        </p>
        <p class="desc">
          简介：你爱的歌，值得反复聆听私人雷达，每日更新，收藏你的最爱
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@include b(detail-header) {
  display: flex;
  padding-bottom: 36px;

  @include e(cover) {
    width: 200px;
    height: 200px;
    margin-right: 24px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  @include e(content) {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
  }

  @include e(title) {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    font-size: 16px;
    color: #333;
  }

  @include e(creator) {
    display: flex;
    align-items: center;
    margin-bottom: 18px;
    font-size: 14px;

    .avatar {
      width: 30px;
      height: 30px;
      margin-right: 8px;
      border-radius: 50%;
    }

    .creator {
      margin-right: 8px;
    }

    .time {
      font-size: 12px;
    }
  }

  @include e(desc) {
    font-size: 14px;

    .desc {
      margin-top: 8px;

      @include text-ellipsis-multi(3);
    }
  }
}
</style>
