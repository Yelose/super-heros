import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Races from "../components/Races.vue";
import Favorites from "../components/Favorites.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/stats",
      name: "stats",
      component: () => import("../components/Stats.vue"),
    },
    {
      path: "/races",
      name: "races",
      component: Races,
    },
    {
      path: "/Favorites",
      name: "favorites",
      component: Favorites,
    }
  ],
});

export default router;
