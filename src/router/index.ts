import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import LayoutDefault from '~/layouts/default.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/discovery',
    component: LayoutDefault,
    children: [
      {
        path: '/discovery',
        component: () => import('~/pages/discovery/index.vue'),
      },
      {
        path: '/playlist',
        component: () => import('~/pages/playlist/index.vue'),
      },
      {
        path: '/playlist/:id',
        component: () => import('~/pages/playlist-detail/index.vue'),
      },
      {
        path: '/search/:keywords',
        component: () => import('~/pages/search/index.vue'),
      },
      {
        path: '/song',
        component: () => import('~/pages/song/index.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory('/'),
  routes,
})

export default router
