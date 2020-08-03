import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/aluraFacebook",
    beforeEnter() {
      location.href = "https://www.facebook.com/AluraLarp/";
    },
  },
  {
    path: "/forum",
    name: "Forum",
    component: () => import("../views/Forum.vue"),
  },
  {
    path: "/media",
    name: "Media",
    component: () => import("../views/Media.vue"),
  },
  {
    path: "/wiki",
    name: "Wiki",
    component: () => import("../views/Wiki.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/AccountAccess.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
