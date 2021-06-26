<template>
  <div class="uid">
    <ElInput placeholder="请输入您的网易云uid" />
    <div class="uid__item">
      <p>1、请点我 <a href="http://music.163.com" target="_blank">(http://music.163.com)</a>打开网易云音乐官网</p>
      <p>2、点击页面右上角的“登录”</p>
      <p>3、点击您的头像，进入我的主页</p>
      <p>4、复制浏览器地址栏 /user/home?id= 后面的数字（网易云 UID）</p>
    </div>
    <div class="uid__item">
      <ElButton type="primary" :loading="loading" class="uid__login">
        登录
      </ElButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElInput, ElButton } from 'element-plus'
import { ref } from 'vue'

const loading = ref<boolean>(true)
</script>

<style lang="scss" scoped>
@include b(uid) {
  @include e(item) {
    margin-top: 20px;

    p {
      line-height: 28px;
    }
  }

  @include e(login) {
    width: 100%;
  }
}
</style>
