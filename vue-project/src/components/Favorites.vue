<script>
import { mapState } from "pinia";
import { userCardsFavoritesStore} from "../stores/favorites";
export default {
    computed: {
        ...mapState(userCardsFavoritesStore, ['favorites'])
    }
}
</script>

<template>
    <main class="favorites-container">
        <button>
            <h3>Add my personalized card</h3>
        </button>
        <div id="test" v-for="cardsfavorites in Cardsfavorites" :key="key"  style="color:white;">
            {{ cardsfavorites }}
        </div>
        <div v-for="superHero in $root.favorites" class="favorites-item-container" v-bind:style="{ background: superHero.color  + '80'}">
            <div class="card-container" v-bind:style="{ background: superHero.color}">
                <div v-on:click="" class="card-frame">
                    <h4>{{ superHero.name }}</h4>
                    <img class="hero-img-md" v-bind:src="superHero.images.sm" alt="">
                    <div class="card-stats-container">
                        <section class="stat-bar">
                            <img class="stat-img" src="/src/assets/img/espada2.png" alt="">
                            <div class="colorless-bar">
                                <div class="attack-bar" v-bind:style="{ width: superHero.powerstats.strength + '%' }">
                                </div>
                            </div>
                        </section>
                        <section class="stat-bar">
                            <img class="stat-img" src="/src/assets/img/escudo2.png" alt="">
                            <div class="colorless-bar">
                                <div class="def-bar" v-bind:style="{ width: superHero.powerstats.durability + '%' }">
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<style lang="scss">
.favorites-container {
    width: calc(83vw - 150px);
    padding: 3vw;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    button {
        background-color: hsla(0, 0%, 0%, 0.6);
        border-radius: calc(0.3vw + 0.3vh);
        border-color: #CFA25B;
        width: 100%;
        padding: 1vh 1vw;
    }
    .favorites-item-container {
        width: 100%;
        border: 3px solid #CFA25B;
        border-radius: calc(0.3vw + 0.3vh);
        margin-top: 5vh;
        padding: 2px;
        .card-container {
            background: rgb(53, 53, 53);
            width: 14vw;
            height: 22vw;
            border-radius: 4%;
            max-width: 130px;
            max-height: 205px;
            .card-frame {
                width: 100%;
                height: 100%;
                display: flex;
                flex-flow: column nowrap;
                justify-content: flex-start;
                align-items: center;
                background-image: url(../assets/img/marco.PNG);
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                border-radius: 4%;
                h4 {
                    margin-top: 17%;
                    font-size: clamp(8px, 1.5vw, 15px);
                    color: #D9D9D9;
                    font-weight: 100;
                }
                .hero-img-md {
                    width: 60%;
                    margin-bottom: 4%;
                }
            }
        }
    }
}
</style>