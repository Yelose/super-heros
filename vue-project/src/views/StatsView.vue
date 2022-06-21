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
    <div v-for="(item, index) in stats">
        <section>
            <p class="initials">{{item.initials}}</p>
        </section>
        <section>
            <span>{{item.name}}:</span>
            <p>{{item.description}}</p>
        </section>
    </div>

</template>

<style scoped>

</style>
