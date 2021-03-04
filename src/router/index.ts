import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Discover",
    redirect: "/discover",
    component: () =>
      import(/* webpackChunkName: "discover" */ "@/views/discover/Index.vue"),
    children: [
      {
        path: "/discover",
        name: "DiscoverRecommend",
        component: () =>
          import(
            /* webpackChunkName: "discover" */ "@/views/discover/Recommend.vue"
          ),
      },
      {
        path: "/discover/toplist",
        name: "Toplist",
        component: () =>
          import(
            /* webpackChunkName: "discover" */ "@/views/discover/Toplist.vue"
          ),
      },
      {
        path: "/discover/playlist",
        name: "Playlist",
        component: () =>
          import(
            /* webpackChunkName: "discover" */ "@/views/discover/Playlist.vue"
          ),
      },
      {
        path: "/discover/djradio",
        name: "Djradio",
        component: {
          template: '<router-view />'
        },
        children: [
          {
            path: "/discover/djradio",
            component: () =>
              import(
                /* webpackChunkName: 'discover' */ "@/views/discover/djradio/Index.vue"
              ),
          },
          {
            path: "/discover/djradio/recommend",
            component: () =>
              import(
                /* webpackChunkName: 'discover' */ "@/views/discover/djradio/Recommend.vue"
              ),
          },
          {
            path: "/discover/djradio/rank",
            component: () =>
              import(
                /* webpackChunkName: 'discover' */ "@/views/discover/djradio/Rank.vue"
              ),
          },
        ],
      },
      {
        path: "/discover/singer",
        name: "Singer",
        component: () =>
          import(
            /* webpackChunkName: "discover" */ "@/views/discover/Singer.vue"
          ),
      },
      {
        path: "/discover/album",
        name: "Album",
        component: () =>
          import(
            /* webpackChunkName: "discover" */ "@/views/discover/Album.vue"
          ),
      },
    ],
  },
  {
    path: "/my",
    name: "My",
    component: () =>
      import(/* webpackChunkName: "discover" */ "@/views/my/Index.vue"),
  },
  {
    path: "/friend",
    name: "Friend",
    component: () =>
      import(/* webpackChunkName: "discover" */ "@/views/friend/Index.vue"),
  },
  {
    path: "/store",
    name: "Store",
    component: () =>
      import(/* webpackChunkName: "discover" */ "@/views/store/Index.vue"),
  },
  {
    path: "/musician",
    name: "Musician",
    component: () =>
      import(/* webpackChunkName: "discover" */ "@/views/musician/Index.vue"),
  },
  {
    path: "/download",
    name: "Download",
    component: () =>
      import(/* webpackChunkName: "discover" */ "@/views/download/Index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
