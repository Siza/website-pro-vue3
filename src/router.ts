import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/:catchAll(.*)*",
      name: "NotFound",
      component: () => import("@/pages/NotFound.vue"),
    },
    // {
    //   path: "/mentions-legales",
    //   component: () => import("@/pages/MentionsLegales.vue"),
    // },
  ],
});
