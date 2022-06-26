<script>
export default {
    data() {
        return {
            superHeroes: [],
            superHeroSearch: '',
            superHeroesShort: []
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
        }
    },
    mounted: async function () {
        this.$root.favourites = this.$root.favourites || []
        this.superHeroes = await this.loadSuperHeroes()
        this.superHeroesShort = this.filterSuperHeroes(this.superHeroes)
        this.superHeroesShort = this.shortenSuperHeroes(this.superHeroesShort)
    }
}

</script>

<template>
    <div class="home-container">
        <input type="text" placeholder="search" v-on:keyup="searchSuperHeroes()" v-model="superHeroSearch" />
        <div class="card-container" v-for="superHero in superHeroesShort" v-on:click="selectFavourite(superHero)">
            <div class="card-frame">
                <h4>{{ superHero.name }}</h4>
                <img v-bind:src="superHero.images.md" alt="">
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
    .card-container{
        background-color: rgb(18, 18, 84);
        position: relative;
        width: 14vw;
        height: 22vw;
        margin-bottom: 6vh;
        .card-frame{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            background-image: url(../assets/img/marco.PNG);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            h4 {
                position: absolute;
                top: 2.3vw;
                font-size: 1.5vw;
                color: #D9D9D9;
                font-weight: 100;
            }
        }
    }
}
</style>