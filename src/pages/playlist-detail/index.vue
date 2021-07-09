<template>
  <PlaylistHeader :playlist="playlist" />
  <ElTabs v-model="activeName">
    <ElTabPane label="歌曲列表" name="song" lazy>
      <SongCard
        v-for="song of playlist.songs"
        :key="song.id"
        :song="song"
      />
    </ElTabPane>
    <ElTabPane :label="`评论(${playlist.commentCount || 0})`" name="comment" lazy>
      <Comment
        v-if="activeName === 'comment'"
        :id="playlistId"
        :type="CommentType.playlist"
      />
    </ElTabPane>
  </ElTabs>
</template>

<script setup lang="ts">
import { ElTabs, ElTabPane } from 'element-plus'
import { onMounted, ref, watch, computed } from 'vue'
import { useRoute } from 'vue-router'

import PlaylistHeader from './PlaylistHeader.vue'
import SongCard from '~/components/song/SongCard.vue'
import Comment from '~/components/comment/Comment.vue'

import { getPlaylistDetail } from '~/api/playlist'
import { CommentType } from '~/utils/constant'
import type { IPlaylistDetail } from '~/types'

const route = useRoute()
const activeName = ref<string>('song')
const playlist = ref<IPlaylistDetail>({} as IPlaylistDetail)
const playlistId = computed<string>(() => (route.params.id as string))

const playlistDetailCallback = async() => {
  activeName.value = 'song'
  playlist.value = await getPlaylistDetail({ id: playlistId.value })
}

watch(() => route.params, () => {
  playlistDetailCallback()
})

onMounted(() => {
  playlistDetailCallback()
})
</script>
