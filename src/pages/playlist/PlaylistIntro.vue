<template>
  <div class="intro-card">
    <div class="intro-card__wrapper">
      <div class="intro-card__cover">
        <img src="http://p4.music.126.net/NDdtSac66rpsF_jMBh1JMQ==/109951164929306650.jpg?param=280y280">
      </div>
      <div class="intro-card__content">
        <div class="intro-card__tag">
          精品歌单
        </div>
        <p class="intro-card__name">
          国摇金属:梦与花火怒放的桀骜篇章
        </p>
        <p class="intro-card__desc">
          乡村乐（Country）曲调简单，节奏平稳，歌词通俗，具有醇厚的乡土气息，亲切热情，无拘无束。它是美国本土晚间车载电台上收听最高的音乐风格，自驾出游，驰骋野外的印象深入人心。乡村音乐一方面为美国多元文化做出很大贡献，丰富了美国乃至世界人民的娱乐及精神生活，另一方面也促进了美国本土音乐的发展，成为美国的一大“特产”，是美国音乐界的重要组成部分。
          起源：
          20世纪20年代兴起于美国南部，其根源来自英国民谣，是美国白人民族音乐代表。最早于18世纪末以最早的音乐形式萌芽。诞生于1920年，乡村乐之父Jimmie Rodgers将多种风格混合创新，为乡村乐的创作和迅速发展奠定了基础。
          50至60年代，乡村音乐追随听众进入了城市。70年代中期的叛逆运动，摒弃弦乐配置和多余的华彩演奏，替代了公式化的纳什维尔风格。到了80年代，约翰·特拉沃尔特出演了一部名叫《城市牛仔》的电影，一时间无论大城市还是乡镇居住美国人都开始学习穿牛仔靴，带“十加仑”帽招摇过市，开始风靡音乐市场，自30年代以来，首次出现大众文化追求乡村，而不是乡村受大众文化影响，乡村音乐毫无疑问地被推向高潮。
        </p>
      </div>
    </div>
    <div class="intro-card__bg" style="background-image: url('http://p4.music.126.net/NDdtSac66rpsF_jMBh1JMQ==/109951164929306650.jpg');"></div>
    <div class="intro-card__bgmask"></div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@include b(intro-card) {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 4px;

  @include e(bg) {
    z-index: 0;
    filter: blur(16px);

    @include abs-stretch;
  }

  @include e(bgmask) {
    z-index: 0;
    background-color: rgba(0, 0, 0, 0.5);

    @include abs-stretch;
  }

  @include e(wrapper) {
    position: relative;
    z-index: 1;
    display: flex;
    padding: 16px;
  }

  @include e(cover) {
    flex-shrink: 0;
    width: 140px;
    height: 140px;
    margin-right: 8px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  @include e(content) {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
  }

  @include e(tag) {
    align-self: flex-start;
    padding: 4px 15px;
    margin-bottom: 10px;
    font-size: 13px;
    color: #e7aa5a;
    border: 1px solid #e7aa5a;
    border-radius: 4px;
  }

  @include e(name) {
    margin-bottom: 8px;
    font-size: 16px;
    color: #fff;
  }

  @include e(desc) {
    font-size: 12px;
    line-height: 14px;
    color: rgba(255, 255, 255, 0.5);

    @include text-ellipsis-multi(5);
  }
}
</style>
