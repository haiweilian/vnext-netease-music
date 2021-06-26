<template>
  <div class="">
    <ElInput v-model="search" placeholder="搜索" suffix-icon="el-icon-search" @focus="isSearch = true" @blur="isSearch = false" />
    <teleport to="#app">
      <div v-show="isSearch" class="search">
        <p class="search__title">
          热门搜索
        </p>
        <div class="search__tags">
          <span class="search__tag">可乐</span>
          <span class="search__tag">闲玩</span>
          <span class="search__tag">还是会想你</span>
          <span class="search__tag">起风了</span>
          <span class="search__tag">错位时空</span>
          <span class="search__tag">可乐</span>
          <span class="search__tag">闲玩</span>
          <span class="search__tag">还是会想你</span>
          <span class="search__tag">起风了</span>
          <span class="search__tag">错位时空</span>
        </div>
        <p class="search__title">
          搜索历史
        </p>
        <div class="search__tags">
          <span class="search__tag">可乐</span>
          <span class="search__tag">闲玩</span>
          <span class="search__tag">还是会想你</span>
          <span class="search__tag">起风了</span>
          <span class="search__tag">错位时空</span>
          <span class="search__tag">可乐</span>
          <span class="search__tag">闲玩</span>
          <span class="search__tag">还是会想你</span>
          <span class="search__tag">起风了</span>
          <span class="search__tag">错位时空</span>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { ElInput } from 'element-plus'
import { ref } from 'vue'
const search = ref('')
const isSearch = ref(false)
</script>

<style lang="scss" scoped>
@include b(search) {
  position: fixed;
  top: 50px;
  right: 0;
  bottom: 60px;
  z-index: $z-index-search;
  width: 350px;
  padding: 15px 20px;
  overflow-y: auto;
  background: #fff;
  box-shadow: 0 0.14286rem 0.57143rem 0 rgb(0 0 0 / 20%);

  @include e(title) {
    margin-bottom: 15px;
    font-size: 12px;
    color: #5c5c5c;
  }

  @include e(tags) {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
  }

  @include e(tag) {
    padding: 4px 15px;
    margin-right: 5px;
    margin-bottom: 10px;
    font-size: 12px;
    cursor: pointer;
    border: 1px solid #d9d9d9;
    border-radius: 2px;

    &:hover {
      background: #f5f5f5;
    }
  }
}
</style>
