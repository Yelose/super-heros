import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RacesView from "../views/RacesView.vue";
import FavoritesView from "../views/FavoritesView.vue";
import StatsView from "../views/StatsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/stats",
      name: "stats",
      component: StatsView,
    },
    {
      path: "/races",
      name: "races",
      component: RacesView,
    },
    {
      path: "/favorites",
      name: "favorites",
      component: FavoritesView,
    }
  ],
});

export default router;
