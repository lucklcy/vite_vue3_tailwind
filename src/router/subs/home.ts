export default [
  {
    path: "/",
    name: "r_home",
    redirect: (to) => {
      // 方法接收目标路由作为参数
      // return 重定向的字符串路径/路径对象
      return { path: "/youtube", query: {} };
    },
  },
  {
    path: "/youtube",
    name: "r_youtube",
    component: () => import("@/views/youtube.vue"),
    meta: {
      breadcrumb: [
        { path: "#", title: "首页" },
        { path: "#", title: "home" },
      ],
    },
  },
];
