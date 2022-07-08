<script>
import { mapState, mapActions } from "pinia";
import { userCardsFavoritesStore} from "../stores/favorites";
import Notes from "./Notes.vue";
export default {
    /*     data() {
            return {
                Cardsfavorites: []
            }
        }, */
    computed: {
        ...mapState(userCardsFavoritesStore, {
            favoritesHeroes: "favoritesHeroes"
        })
    },
    methods: {
        ...mapActions(userCardsFavoritesStore, ["deleteFavorite"]),

        // deleteFavorite: function(hero){
        //     this.favoritesHeroes.splice(this.favoritesHeroes.indexOf(hero), 1)
        // }
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
            <div class="card-container" v-bind:style="{ borderColor: hero.color, background: hero.color + '90' }"
                v-for="hero in favoritesHeroes" :key="key">
                <section class="hero-img">
                    <figure>
                        <img v-bind:src="hero.images.xs" alt="">
                    </figure>
                </section>
                <section class="hero-name">
                    <div>
                        <p>{{ hero.name }}</p>
                    </div>
                </section>
                <section class="delete-x">
                    <figure>
                        <img v-on:click="deleteFavorite(hero)" src="/src/assets/img/x.png" alt="remove from favorites">
                    </figure>
                </section>

            </div>
        </main>
    </div>
</template>

<style lang="scss">
.my-cards-container {
    position: fixed;
    top: calc(16vh + 5vw);
    right: 3vw;
    height: calc(75vh - 5vw);
    padding: 1vh 0;
    overflow: auto;
    width: calc(14vw + 150px);

.my-cards-container::-webkit-scrollbar{
    border-radius: 4px;
}

    header {
        top: calc(12vh + 5vw);
        right: 11vw;
        position: fixed;
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

    main {
        display: flex;
        flex-flow: column-reverse nowrap;

        .card-container {
            border: 3px solid;
            display: flex;
            justify-content: space-between;
            margin: .1vw;
            border-radius: calc(.2vw + .2vh);

            .hero-img {
                display: flex;

                figure {
                    padding: calc(.1vw + .1vh);
                    width: calc(1.9vw + 1.9vh);
                    height: calc(2.3vw + 2.3vh);

                    img {
                        width: 100%;
                        height: 100%;
                    }
                    
                }
            }

            .hero-name {
                width: 68%;
                display: flex;
                justify-content: center;
                align-items: center;

                div {
                    display: flex;
                    background-color: white;
                    width: 100%;
                    height: 70%;
                    justify-content: center;
                    align-items: center;
                    p {
                        font-size: clamp(9px, 1.5vw, 25px);
                        font-family:'Kelly Slab';
                    }
                }
            }

            .delete-x {
                display: flex;

                figure {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: calc(.1vw + .1vh);
                    width: calc(1.9vw + 1.9vh);
                    height: calc(2.3vw + 2.3vh);
                    cursor: url("/src/assets/img/cursordedo.png"), pointer;

                    img {
                        width: 65%;
                        height: 65%;
                        background-color: white;
                        padding: 5%;
                        border-radius:20%;
                    }
                    img:hover{
                        box-shadow: 0px 0px 5px 5px #ec731e;
                    }
                }
            }
        }
    }

}
.my-cards-container::-webkit-scrollbar{
    width: 4em;
}
.my-cards-container::-webkit-scrollbar-thumb {
  background-image: url(https://www.pngmart.com/files/7/Ruby-PNG-File.png),
    linear-gradient(100deg, transparent, transparent);
 
  background-repeat: no-repeat, no-repeat;
  background-size: contain, contain;
}

.my-cards-container::-webkit-scrollbar-thumb:active {
 background-color: transparent;
}

.my-cards-container::-webkit-scrollbar-thumb:hover {
  background-image: url(https://www.pngmart.com/files/7/Ruby-PNG-File.png);
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}

.my-cards-container::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0);
  border-radius: 4px;
}

.my-cards-container::-webkit-scrollbar-track:hover, 
.my-cards-container::-webkit-scrollbar-track:active {
  background: rgba(0, 0, 0, 0);
}
</style>

