<script>
import { mapState } from 'pinia';
import { userCardsFavoritesStore } from '../stores/favorites';
import Notes from './Notes.vue';
import Rating from './Rating.vue';



export default {
    computed: {
        ...mapState(userCardsFavoritesStore, {
            favoritesHeroes: "favoritesHeroes"
        })
    },
    methods: {
        
        calificar(favorites) {
            let cont;
            console.log(favorites)
            cont = favorites.id[0];
            let nombre = favorites.id.substring(1);
            for (let i = 0; i < 5; i++) {
                if (i < cont) {
                    document.getElementById((i + 1) + nombre).style.color = "orange";
                }
            }
            

        }
    },
    components: { Notes, Rating },

}
</script>
<template>

    <div v-for="superHero in favoritesHeroes" class="favorites-item-container"
        v-bind:style="{ background: superHero.color + '80' }">
        <section class="card-stats-container">
            <div class="card-container" v-bind:style="{ background: superHero.color }">
                <div class="card-frame">
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
            <div class="stats-container">
                <p class="int">
                    {{ "INT" }}:{{ superHero.powerstats.intelligence }}
                </p>
                <p class="str">
                    {{ "STR" }}:{{ superHero.powerstats.strength }}
                </p>
                <p class="spd">
                    {{ "SPD" }}:{{ superHero.powerstats.speed }}
                </p>
                <p class="dur">
                    {{ "DUR" }}:{{ superHero.powerstats.durability }}
                </p>
                <p class="pow">
                    {{ "POW" }}:{{ superHero.powerstats.power }}
                </p>
                <p class="com">
                    {{ "COM" }}:{{ superHero.powerstats.combat }}
                </p>
            </div>

        </section>

        <section class="biography-container">
             <h3 v-if="superHero.fullName !==''">{{superHero.name}}</h3>
             <h3 v-else>{{superHero.biography.fullName}}</h3>
             <p v-if="superHero.connections.groupAffiliation !='-'">Group Affiliation: {{superHero.connections.groupAffiliation}}</p>
             <p v-if="superHero.connections.relatives !='-'">Relatives: {{superHero.connections.relatives}}</p>
             <p v-if="superHero.work.occupation !='-'">Occupation: {{superHero.work.occupation}}</p>

        </section>

        <section class="notes-rating-container">
            <div class="my-notes-container">
                <Notes />
            </div>
 <div id="Rating">
  <Rating></Rating>
</div>
        </section>


    </div>

</template>
<style lang="scss">
.int {
    background-color: #FFF27D;
}

.str {
    background-color: #DF5F5F;
}

.spd {
    background-color: #A19740;
}

.dur {
    background-color: #7BA4F3;
}

.pow {
    background-color: #824084;
}

.com {
    background-color: #9CA69D;
}

.favorites-item-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    border: 3px solid #CFA25B;
    border-radius: calc(0.3vw + 0.3vh);
    margin-top: 5vh;
    padding: 2px;

    .card-stats-container {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;

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

        .stats-container {
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-between;
        }
    }

    .biography-container {
        p {
            color: rgb(255, 255, 255);
        }
    }

}
</style>