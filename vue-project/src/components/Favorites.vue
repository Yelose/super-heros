<script>

</script>

<template>
    <h1>Favorites</h1>
    <div v-for="superHero in $root.favourites">
        {{superHero.name}}
    </div>
</template>