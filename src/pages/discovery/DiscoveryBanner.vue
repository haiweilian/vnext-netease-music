<template>
  <ElCarousel type="card" height="200px">
    <ElCarouselItem v-for="item of banners" :key="item.imageUrl">
      <img class="banner-cover" :src="item.imageUrl" :alt="item.typeTitle" />
    </ElCarouselItem>
  </ElCarousel>
</template>

<script setup lang="ts">
import { ElCarousel, ElCarouselItem } from 'element-plus'
import { onMounted, ref } from 'vue'

import { getBanner } from '~/api/base'
import type { IBanner } from '~/types/index'

const banners = ref<IBanner[]>([])

onMounted(async () => {
  banners.value = await getBanner()
})
</script>

<style lang="scss" scoped>
.banner-cover {
  width: 100%;
  height: 100%;
}
</style>
