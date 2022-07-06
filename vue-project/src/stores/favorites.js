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
        console.log('add favorite')
        this.favoritesHeroes.push(favoriteHero);
      },
      deleteFavorite(favoriteHero) {
        this.favoritesHeroes.splice(this.favoritesHeroes.indexOf(favoriteHero), 1)
        console.log(this.favoritesHeroes.length)
        if (window.updateCards != null) {
          window.updateCards.call(window.homeInstance)
        }
      }
    },
  });
  
