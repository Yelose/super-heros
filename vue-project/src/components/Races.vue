<script>

</script>

<template>
    <h1>Races</h1>
    <div v-for="race in $root.races">
        <p>{{ race }}</p>
    </div>
    <h1>Favorites</h1>
    <div v-for="superHero in $root.favorites">
        {{superHero.name}}
    </div>
</template>
<style lang="scss">

</style>