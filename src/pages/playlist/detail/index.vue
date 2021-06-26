<template>
  <PlaylistHeader />
  <div class="result">
    <ElTabs v-model="activeName" @tab-click="handleClick">
      <ElTabPane label="歌曲列表" name="song">
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
      </ElTabPane>
      <ElTabPane label="评论(4882)" name="comment">
        <Comment />
      </ElTabPane>
    </ElTabs>
  </div>
</template>

<script setup lang="ts">
import { ElTabs, ElTabPane } from 'element-plus'
import { ref } from 'vue'
import PlaylistHeader from './PlaylistHeader.vue'
import SongCard from '~/components/song/SongCard.vue'
import Comment from '~/components/comment/Comment.vue'

const activeName = ref('song')
const handleClick = (tab: string, event: Event) => {
  // console.log(tab, event)
}
</script>
