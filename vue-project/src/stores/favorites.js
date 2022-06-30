import { defineStore } from "pinia";

export const userCardsFavoritesStore = defineStore({
    id: "cardsfavorites",
    state: () => ({
      favoritesHeroes: [],
    }),
    // getters: {
    //   doubleCount: (state) => state.counter * 2,
    // },
    actions: {
      addFavorite(favoriteHero) {
        this.favoritesHeroes.push(favoriteHero);
      },
    },
  });
  
