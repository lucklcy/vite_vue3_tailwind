export default [
  {
    path: '/',
    name: 'r_home',
    component: () => import('@/views/home.vue')
  },
  {
    path: '/youtube/tailwind',
    name: 'r_youtube_tailwind',
    component: () => import('@/views/youtubeTailwind.vue')
  },
  {
    path: '/youtube/less',
    name: 'r_youtube_less',
    component: () => import('@/views/youtubeLess.vue')
  }
]
