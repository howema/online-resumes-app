import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import StudentIndex from "../views/StudentIndex.vue";
import StudentShow from "../views/StudentShow.vue";

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
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/students",
    name: "StudentIndex",
    component: StudentIndex,
  },

  {
    path: "/students/:id",
    name: "StudentShow",
    component: StudentShow,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
