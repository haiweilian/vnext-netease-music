<template>
  <div class="menu-user">
    <!-- 登录前 -->
    <div class="menu-user__user" @click="loginVisible = true">
      <img class="menu-user__avatar" src="http://p1.music.126.net/SUeqMM8HOIpHv9Nhl9qt9w==/109951165647004069.jpg?param=80y80" alt="">
      <p class="menu-user__name">
        为什么抢占我的昵称
      </p>
    </div>
    <!-- 登录后 -->
    <div class="menu-user__user" style="display: none;">
      <img class="menu-user__avatar" src="http://p1.music.126.net/SUeqMM8HOIpHv9Nhl9qt9w==/109951165647004069.jpg?param=80y80" alt="">
      <p class="menu-user__name">
        为什么抢占我的昵称
      </p>
    </div>
    <!-- 扫码登录 -->
    <ElDialog v-model="loginVisible" title="登录" width="500px" append-to-body>
      <LoginUId />
    </ElDialog>
  </div>
</template>

<script setup lang="ts">
import { ElDialog } from 'element-plus'
import { ref } from 'vue'
import LoginUId from '~/components/login/LoginUId.vue'
const loginVisible = ref(false)
</script>

<style lang="scss" scoped>
@include b(menu-user) {
  padding: 16px;

  @include e(user) {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  @include e(avatar) {
    @include round(40px);
  }

  @include e(name) {
    padding-left: 10px;
    font-size: 14px;
  }
}
</style>
