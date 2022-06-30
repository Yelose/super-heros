<script>
import { mapActions } from 'pinia'
import { userCardsFavoritesStore } from '../stores/favorites'
export default {
    data() {
        return {
            superHeroes: [],
            superHeroSearch: '',
            superHeroesShort: [],
            // audio: "/src/assets/audio/clin.mp3",
        }
    },
    methods: {
        loadSuperHeroes: async function () {
            let superHeroesRequest = await fetch('https://akabab.github.io/superhero-api/api/all.json')
            let superHeroes = await superHeroesRequest.json()
            return superHeroes
        },
        filterSuperHeroes(superHeroes) {
            return superHeroes.filter(p =>
                p.name.toLowerCase().indexOf(this.superHeroSearch.toLowerCase()) != -1 &&
                !(this.favoritesHeroes.find(q => q.id == p.id))
            )
        },
        shortenSuperHeroes(superHeroes) {
            return superHeroes.splice(0, 40)
        },
        searchSuperHeroes() {
            this.superHeroesShort = this.filterSuperHeroes(this.superHeroes)
            this.superHeroesShort = this.shortenSuperHeroes(this.superHeroesShort)
        },
        ...mapActions(userCardsFavoritesStore, ['addFavorite']),
        selectFavorite(superHero) {
            this.favoritesHeroes.push(superHero) 
            //this.newSuperToAdd = superHero;
            this.addFavorite(superHero)
           
            this.searchSuperHeroes()
        },
        getRaces() {
            let races = []
            let mixedRace = ["Human / Radiation", "Human / Clone", "Human / Cosmic",
                "Human / Altered", "Human-Kree", "Human-Vuldarian", "Human-Vulcan", "Human-Spartoi", "Mutant / Clone"]
            let humanoids = ["Human", "Icthyo Sapien", "Inhuman", "Metahuman", "Amazon", "Mutant", "Tamaranean",
                "Talokite", "Clone", "Spartoi", "Strontian", "Black Racer", "Alpha"]
            let deadOnes = ["Vampire", "Demon", "Parademon", "Zombie", "Korugaran"]
            let aliens = ["Xenomorph XX121", "Alien", "Martian", "Yautja", "Luphomoid", "Czarnian",
                "Bolovaxian", "Gungan", "Asgardian", "Rodian", "Zen-Whoberian", "Kakarantharaian", "Kryptonian", "Dathomirian Zabrak"]
            let animated = ["Saiyan", "Bizarro", "Neyaphem", "Atlantean", "Symbiote", "Cosmic Entity", "Ungaran"]
            let mixed = ["Gorilla", "Animal", "Yoda's species", "Kaiju", "Cyborg", "Android", "Flora Colossus", "Demi-God", "Eternal", "New God", "Frost Giant", "Maiar", "God / Eternal"]
            this.superHeroes.forEach(superHero => {
                // races.find se considera true, si encuentra una, y false si no.
                if (!races.find(p => p == superHero.appearance.race)) {
                    if (superHero.appearance.race == null) {
                        // races.push(superHero.appearance.race)
                        superHero.color = "#001025"
                    }
                    if (mixedRace.indexOf(superHero.appearance.race) != -1) {
                        superHero.color = "#190F00"
                    }
                    if (humanoids.indexOf(superHero.appearance.race) != -1) {
                        superHero.color = "#000000"
                    }
                    if (deadOnes.indexOf(superHero.appearance.race) != -1) {
                        superHero.color = "#500808"
                    }
                    if (aliens.indexOf(superHero.appearance.race) != -1) {
                        superHero.color = "#051900"
                    }
                    if (animated.indexOf(superHero.appearance.race) != -1) {
                        superHero.color = "#000119"
                    }
                    if (mixed.indexOf(superHero.appearance.race) != -1){
                        superHero.color = "#190016"
                    }
                }
            })
            return races
        },
        // giveColor(hero) {
        //     color = ""
        //     let mestizosColor = "#260E08"
        //     let mestizos = ["Human / Radiation", "Human / Clone", "Human / Cosmic", "Human / Altered", "Human / Altered"]
        //     this.superHeroes.forEach(superHero => {
        //         if (!color.find(p => p == superHero.appearance.race)){
        //             if (superHero.appearance.race == null){
        //                 this.$root.superHero.color = "gray"
        //             }
        //         }
        //     })
        //     return color
        // },
        // audioPlayClin() {
        //     let audio = document.createElement()
        // }
    },
    mounted: async function () {
        this.favoritesHeroes = this.favoritesHeroes || []
        this.superHeroes = await this.loadSuperHeroes()
        this.superHeroesShort = this.filterSuperHeroes(this.superHeroes)
        this.superHeroesShort = this.shortenSuperHeroes(this.superHeroesShort)
        this.$root.races = this.getRaces()
    }
}
</script>

<template>
    <main>
        <div class="home-container">
            <input type="text" placeholder="search" v-on:keyup="searchSuperHeroes()" v-model="superHeroSearch" />
            <div class="card-container" v-bind:style="{ background: superHero.color }" v-for="superHero in superHeroesShort"
                v-on:click="selectFavorite(superHero)">
                <div v-on:click="" class="card-frame">
                    <h4>{{ superHero.name }}</h4>
                    <img class="hero-img-md" v-bind:src="superHero.images.sm" alt="">
                    <div class="card-stats-container">
                        <section class="stat-bar">
                            <img class="stat-img" src="/src/assets/img/espada2.png" alt="">
                            <div class="colorless-bar">
                                <div class="attack-bar" v-bind:style="{ width: superHero.powerstats.strength + '%' }"></div>
                            </div>
                        </section>
                        <section class="stat-bar">
                            <img class="stat-img" src="/src/assets/img/escudo2.png" alt="">
                            <div class="colorless-bar">
                                <div class="def-bar" v-bind:style="{ width: superHero.powerstats.durability + '%' }"></div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss">
.home-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    width: calc(83vw - 150px);
    padding: 3vw;
    gap: 1%;
    input {
        position: fixed;
        right: 0;
        top: 6vh;
        border-radius: 4px;
        padding: calc(.5vw + .5vh);
        margin-right: 3vw;
        width: 16vw;
        z-index: 102;
    }
    .card-container {
        background: rgb(53, 53, 53);
        width: 14vw;
        height: 22vw;
        margin-bottom: 2%;
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
.card-stats-container {
    width: 65%;
    bottom: 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    .stat-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 3%;
        .stat-img {
            width: 10%;
        }
        .attack-bar {
            background-color: #650f0f;
            height: 100%;
        }
        .colorless-bar {
            width: 80%;
            height: 100%;
            background-color: #C4C4C4;
            border-radius: 2vw;
            overflow: hidden;
        }
        .def-bar {
            background-color: rgb(34, 34, 170);
            height: 100%;
        }
    }
}
</style>