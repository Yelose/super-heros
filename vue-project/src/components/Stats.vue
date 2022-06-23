<script setup>
    
        let stats = [
            {
                name: "Intelligence",
                initials: "INT",
                description: "lorem",
                image: "src:blablabl",
                color: "#FFF27D"
            },
            {
                name: "Strength",
                initials: "STR",
                description: "lorem",
                image: "src:blablabl",
                color: "#DF5F5F"
            },
            {
                name: "Intelligence",
                initials: "INT",
                description: "lorem",
                image: "src:blablabl",
                color: "#FFF27D"
            },
            {
                name: "Intelligence",
                initials: "INT",
                description: "lorem",
                image: "src:blablabl",
                color: "#FFF27D"
            },
            {
                name: "Intelligence",
                initials: "INT",
                description: "lorem",
                image: "src:blablabl",
                color: "#FFF27D"
            },
            {
                name: "Intelligence",
                initials: "INT",
                description: "lorem",
                image: "src:blablabl",
                color: "#FFF27D"
            }
        ]
</script>
<template>

<main>
    <div class="stats-container" v-for="(item, index) in stats">
        <section>
            <p class="initials">{{item.initials}}</p>
        </section>
        <section>
            <span>{{item.name}}:</span>
            <p>{{item.description}}</p>
        </section>
    </div>
</main>

</template>

<style lang="scss" scoped>
main {
    display: flex;
    flex-flow: column;
    .stats-container {
        background-color: black;
        display: flex;
        width: 100%;
        section{
            display: flex;
        }
    }
}

</style>