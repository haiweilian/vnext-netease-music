<template>
  <div class="menu-scroll">
    <div v-for="menus of menusList" :key="menus.name" class="menu-song">
      <p class="menu-song__title">
        {{ menus.name }}
      </p>
      <ul v-for="menu of menus.children" :key="menu.link" class="">
        <RouterLink v-slot="{ navigate, isExactActive }" :to="menu.link" custom>
          <li class="menu-song__item" :class="{ 'is-active': isExactActive }" @click="navigate">
            <Icon :name="menu.icon" />
            <span class="menu-song__value">
              {{ menu.name }}
            </span>
          </li>
        </RouterLink>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'

import Icon from '~/components/base/Icon.vue'
import { getUserPlaylist } from '~/api/user'
import { localMenus } from '~/utils/local'
import { useUserStore } from '~/store/modules/user'
import type { IMenu } from '~/types'

const userStore = useUserStore()

/**
 * 如果已登录收藏加默认菜单，反之只展示默认菜单。
 */
const menusList = ref<IMenu[]>([])
watchEffect(async () => {
  if (userStore.user) {
    const reqMenus = await getUserPlaylist({ uid: userStore.user.userId })
    menusList.value = localMenus.concat(reqMenus)
  } else {
    menusList.value = localMenus
  }
})
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

    @include text-ellipsis();
  }
}
</style>
