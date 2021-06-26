<template>
  <div class="comment">
    <div class="comment__block">
      <p class="comment__title">
        精彩评论
      </p>
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
    </div>
    <div class="comment__block">
      <p class="comment__title">
        最新评论
        <span class="comment__count">11111</span>
      </p>
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
    </div>
    <div class="comment__pagination">
      <ElPagination layout="prev, pager, next" :total="50" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElPagination } from 'element-plus'
import CommentItem from './CommentItem.vue'
</script>

<style lang="scss" scoped>
@include b(comment) {
  margin-bottom: 48px;

  @include e(title) {
    margin-bottom: 4px;
    font-size: 16px;
    font-weight: 700;
  }

  @include e(count) {
    font-size: 14px;
  }

  @include e(pagination) {
    text-align: right;
  }
}
</style>
