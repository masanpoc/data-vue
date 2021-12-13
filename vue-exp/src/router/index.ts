import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/data",
    name: "DataVisualization",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DataVisualization.vue"),
  },
  {
    path: "/dom",
    name: "DomManipulation",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DomManipulation.vue"),
  },
  {
    path: "/form",
    name: "FormValidation",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FormValidation.vue"),
  },
  {
    path: "/media",
    name: "MediaAndAnimation",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MediaAndAnimation.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
