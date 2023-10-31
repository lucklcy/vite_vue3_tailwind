export default [
  // {
  //   path: '/',
  //   name: 'r_home',
  //   component: () => import('@/views/home.vue')
  // },
  {
    path: '/',
    name: 'r_home',
    redirect: { path: '/youtube' }
  },
  {
    path: '/youtube',
    name: 'r_youtube_tailwind',
    component: () => import('@/views/youtube.vue')
  },
  {
    path: '/less/youtube',
    name: 'r_youtube_less',
    component: () => import('@/views/useLess/youtube.vue')
  }
]
