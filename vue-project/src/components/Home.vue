<script>
export default {
    data() {
        return {
            superHeroes: [],
            superHeroSearch: ''
        }
    },
    methods: {
        loadSuperHeroes: async function () {
            let superHeroesRequest = await fetch('https://akabab.github.io/superhero-api/api/all.json')
            let superHeroes = await superHeroesRequest.json()
            return superHeroes
        },
        filterSuperHeroes(superHeroes) {
            return superHeroes.filter(p => p.name.toLowerCase().indexOf(this.superHeroSearch.toLowerCase()) != -1)
        }
    },
    mounted: async function () {
        this.superHeroes = await this.loadSuperHeroes()
    }
}

</script>

<template>
    <div class="home-container">
        <input type="text" placeholder="search" v-model="superHeroSearch" />
        <div v-for="superHero in filterSuperHeroes(superHeroes)">
            {{ superHero.name }}
        </div>
    </div>
</template>

<style lang="scss">
.home-container {
    margin-top: calc(5vw + 15vh);
    input {
        position: fixed;
        right: 0;
        top: 6vh;
        border-radius: 4px;
        padding: calc(.5vw + .5vh);
        margin-right: 3vw;
        width: 16vw;
    }
}
</style>