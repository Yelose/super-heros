<script>
import { mapState,mapWritableState,mapActions } from "pinia";
import { useFavoritesStore } from "../stores/favorites";

export default {
    data() {
        return {
            newHero: ""
        }
    },
    computed: {
        ...mapState(useFavoritesStore, {
            favorites: 'favorites'
        })
    },
    methods: {
        ...mapActions(useFavoritesStore, {
            add: 'addFavorite'
        }),
    }
}
</script>

<template>

    <div class="my-cards-container">
        <header>
            <h3>My Cards</h3>
            <img src="../assets/img/star.png" alt="star">
        </header>
        <main>
            <input id="new-favorite" type="text" placeholder="hero" v-model="newHero">
            <button @click="add(this.newHero)">Add</button>
            <div v-for="favorite in favorites" :key="key">
                <p>{{ favorite }}</p>
            </div>
            <!-- <div v-for="superHero in $root.favorites">
                <p> {{superHero.name}}</p>
            </div> -->
        </main>
    </div>
</template>

<style lang="scss">
    .my-cards-container{
        position: fixed;
        top: calc(14vh + 5vw);
        right: 0;
        height: calc(83vh - 5vw);
        padding: 1vh 2vw;
        overflow: auto;
        width: calc(15vw + 150px);
        background-color: rgba(255, 0, 0, 0.149);
        header{
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                width: 2vw;
                max-width: 25px;
                min-width: 18px;
                margin-left: .5vw;
            }
        }
    }
</style>