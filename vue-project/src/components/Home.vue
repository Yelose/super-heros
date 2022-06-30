<script>
export default {
    data() {
        return {
            superHeroes: [],
            superHeroSearch: '',
            superHeroesShort: [],
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
                !(this.$root.favourites.find(q => q.id == p.id))
            )
        },
        shortenSuperHeroes(superHeroes) {
            return superHeroes.splice(0, 40)
        },
        searchSuperHeroes() {
            this.superHeroesShort = this.filterSuperHeroes(this.superHeroes)
            this.superHeroesShort = this.shortenSuperHeroes(this.superHeroesShort)
        },
        selectFavourite(superHero) {
            this.$root.favourites.push(superHero)
            this.searchSuperHeroes()
            
       
        },


        getRaces() {
            let races = []

            // for (let superHero of this.superHeroes) {
            //     let found = false
            //     for (let race of races) {
            //         if (race == superHero.race) {
            //             found = true;
            //             break
            //         }
            //     }
            //     if (!found) {
            //         races.push(superHero.race)
            //     }
            // }

            this.superHeroes.forEach(superHero => {
                // races.find se considera true, si encuentra una, y false si no.
                if (!races.find(p => p == superHero.appearance.race)) {
                    if (superHero.appearance.race != null) {
                        races.push(superHero.appearance.race)
                    }
                }
            })
            return races
        }
    },
    mounted: async function () {
        this.$root.favourites = this.$root.favourites || []
        this.superHeroes = await this.loadSuperHeroes()
        this.superHeroesShort = this.filterSuperHeroes(this.superHeroes)
        this.superHeroesShort = this.shortenSuperHeroes(this.superHeroesShort)
        this.$root.races = this.getRaces()
    }
}

</script>

<template>
    <div class="home-container">
        <input type="text" placeholder="search" v-on:keyup="searchSuperHeroes()" v-model="superHeroSearch" />
        <div class="card-container" v-for="superHero in superHeroesShort" v-on:click="selectFavourite(superHero)">
            <div class="card-frame">
                <h4>{{ superHero.name }}</h4>
                <img class="hero-img-md" v-bind:src="superHero.images.sm" alt="">
                <div class="card-stats-container">
                    <section class="stat-bar">
                        <img class="stat-img" src="/src/assets/img/espada2.png" alt="">
                        <div class="colorless-bar">
                            <div class="attack-bar" v-bind:style="{width: superHero.powerstats.strength + '%'}"></div>
                        </div>
                    </section>
                    <section class="stat-bar">
                        <img class="stat-img" src="/src/assets/img/escudo2.png" alt="">
                        <div class="colorless-bar">
                            <div class="def-bar" v-bind:style="{width: superHero.powerstats.durability + '%'}"></div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.home-container {
    padding-left: 4vw;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    margin-top: calc(5vw + 15vh);
    width: 70vw;

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
        background-color: rgb(18, 18, 84);
        width: 14vw;
        height: 22vw;
        margin-bottom: 6vh;
        border-radius: 4%;

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
                margin-top: 2.7vw;
                font-size: 1.5vw;
                color: #D9D9D9;
                font-weight: 100;
            }

            .hero-img-md {
                width: 9vw;
                height: 11vw;
                margin-bottom: 0.5vw;
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
        padding-bottom: 0.5vw;
        
        .stat-img {
            width: 1vw;
            height: 1vw;
        }
        .attack-bar{
            background-color: #EC1818;
            height: 100%;
        }
        .colorless-bar {
            width: 80%;
            height: 100%;
            background-color: #C4C4C4;
            border-radius: 2vw;
            overflow: hidden;
        }
        .def-bar{
            background-color: blue;
            height: 100%;
        }
    }
}
</style>