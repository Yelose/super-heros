import { defineStore } from "pinia";

export const useFavoritesStore = defineStore({
    id: "favorites",
    state: () => ({
      favorites: ['Baby','Superman'],
    }),
    // getters: {
    //   doubleCount: (state) => state.counter * 2,
    // },
    actions: {
      addFavorite(fav) {
        this.favorites.push(fav);
      },
    },
  });
  