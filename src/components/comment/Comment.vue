<template>
  <div class="comment">
    <div class="comment__block">
      <p class="comment__title">
        精彩评论
      </p>
      <CommentItem
        v-for="comment of commentsHot"
        :key="comment.id"
        :comment="comment"
      />
    </div>
    <div class="comment__block">
      <p class="comment__title">
        最新评论
        <span class="comment__count">11111</span>
      </p>
      <CommentItem
        v-for="comment of commentsNew"
        :key="comment.id"
        :comment="comment"
      />
    </div>
    <div class="comment__pagination">
      <ElPagination
        v-model:currentPage="currentPage"
        layout="prev, pager, next"
        :total="total"
        @current-change="commentNewCallback"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElPagination } from 'element-plus'
import { defineProps, watchEffect, ref } from 'vue'
import type { PropType } from 'vue'

import CommentItem from './CommentItem.vue'
import { getCommentHot, getCommentNew } from '~/api/comment'
import type { CommentType } from '~/utils/constant'
import type { IComment } from '~/types'

const props = defineProps({
  id: {
    type: [String, Number],
    required: true,
  },
  type: {
    type: Object as PropType<CommentType>,
    required: true,
  },
})

/**
 * 热门评论
 */
const commentsHot = ref<IComment[]>([])
const commentHotCallback = async() => {
  const comment = await getCommentHot({
    id: props.id,
    type: props.type,
  })
  commentsHot.value = comment.comments
}

/**
 * 最新评论
 */
const total = ref<number>(0)
const cursor = ref<string>('')
const currentPage = ref<number>(1)
const commentsNew = ref<IComment[]>([])
const commentNewCallback = async() => {
  const comment = await getCommentNew({
    id: props.id,
    type: props.type,
    sortType: 3,
    cursor: cursor.value,
  })
  total.value = comment.total
  cursor.value = comment.cursor
  commentsNew.value = comment.comments
}

/**
 * 参数变化重新请求
 */
watchEffect(() => {
  if (props.id) {
    commentHotCallback()
    commentNewCallback()
  }
})
</script>

<style lang="scss" scoped>
@include b(comment) {
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
