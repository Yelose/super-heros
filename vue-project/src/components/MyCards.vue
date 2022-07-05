<script>
import { mapState,mapWritableState,mapActions } from "pinia";
import { userCardsFavoritesStore} from "../stores/favorites";
export default {
/*     data() {
        return {
            Cardsfavorites: []
        }
    }, */
    computed: {
        ...mapState(userCardsFavoritesStore, {
            favoritesHeroes: 'favoritesHeroes'
        })
    },

    ...mapActions(userCardsFavoritesStore, ['deleteFavorite']),
    selectFavorite(superHero) {
            this.favoritesHeroes.push(superHero) 
            //this.newSuperToAdd = superHero;
            this.deleteFavorite(superHero)
           
            this.searchSuperHeroes()
        },
}
</script>

<template>

    <div class="my-cards-container">
        <header>
            <h3>My Cards</h3>
            <img src="../assets/img/star.png" alt="star">
        </header>
        <main>
<!--             <input id="new-favorite" type="text" placeholder="hero" v-model="newHero">
            <button @click="add(this.favorites)">Add</button> -->
            <div v-for="hero in favoritesHeroes" :key="key">
                <p>{{ hero.name }}</p>
            </div>
            <!-- <div v-for="superHero in $root.favorites">
                <p> {{superHero.name}}</p>
            </div> -->
        </main>
    </div>
</template>

<style lang="scss">
.my-cards-container {
  position: fixed;
  top: calc(14vh + 5vw);
  right: 0;
  height: calc(83vh - 5vw);
  padding: 1vh 2vw;
  overflow: auto;
  width: calc(15vw + 150px);
  background-color: rgba(255, 0, 0, 0.149);
  header {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 2vw;
      max-width: 25px;
      min-width: 18px;
      margin-left: 0.5vw;
    }
  }
}
</style>
