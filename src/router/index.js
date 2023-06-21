import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    components: {
      default: HomeView,
      "load-page": () =>
      import(/* webpackChunkName: "about" */ "../views/Error404.vue")
    },
    meta: {
      layout: "AppLayoutHome",
    },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    meta: {
      layout: "AppLayoutAbout",
    },
  },
  {
    path: "/contact",
    name: "contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/ContactView.vue"),
    meta: {
      layout: "AppLayoutContacts",
    },
  },
  {
    path: "/user",
    name: "user",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/user/index.vue"),
    children: [
      {
        path: "",
        name: "dashboard",
        component: () => import("../views/user/dasboadView.vue"),
        meta: {
          layout: "AppLayoutAbout",
        },
      },
      {
        path: ":id",
        name: "user-detail",
        component: () => import("../views/user/userDetail.vue"),

        meta: {
          layout: "AppLayoutAbout",
        },
      },
    ],
  },
  {
    path: "*",
    name: "error-404",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Error404.vue"),
    meta: {
      layout: "AppLayoutAbout",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes,
});

export default router;
