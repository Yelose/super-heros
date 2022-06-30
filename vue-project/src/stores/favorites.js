import { defineStore } from "pinia";

export const useFavoritesStore = defineStore({
    id: "favorites",
    state: () => ({
      favorites: [],
    }),
    // getters: {
    //   doubleCount: (state) => state.counter * 2,
    // },
    // actions: {
    //   increment() {
    //     this.counter++;
    //   },
    // },
  });
  