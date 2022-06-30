<script>

</script>

<template>
    <h1>Favorites</h1>
    <div v-for="superHero in $root.favorites">
        {{superHero.name}}
    </div>
</template>
<style>

</style>