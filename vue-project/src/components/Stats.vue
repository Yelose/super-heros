<script setup>
    
        let stats = [
            {
                name: "Intelligence",
                initials: "INT",
                description: "Intelligence controls a character's ability to comprehend foreign languages and their skill in magic. Intelligence controls how many skill points the character gets at level up. It also controls the rate at which experience points are earned, or the amount needed to level up.",
                image: "src:blablabl",
                color: "#FFF27D"
            },
            {
                name: "Strength",
                initials: "STR",
                description: "Strength is a  measure of how physically strong a character is, it controls the power and damage of melee attacks, the maximum weight the character can carry, and hit points. Armor and weapons might also have a Strength requirement to use them. A measure of how sturdy a character is",
                image: "src:blablabl",
                color: "#DF5F5F"
            },
            {
                name: "Speed",
                initials: "SPD",
                description: "Speed or movement is an inherited trait possessed by every living being. Even the most stationary of animals like the tube worm weave and dance gracefully at the ocean floor.",
                image: "src:blablabl",
                color: "#FFF27D"
            },
            {
                name: "Durability",
                initials: "DUR",
                description: "Durability is the property which guarantees the ability to survive a certain amount of force. Not to be confused with Endurance. Durability is the ability to withstand damage, while Endurance is a measure of stamina.",
                image: "src:blablabl",
                color: "#FFF27D"
            },
            {
                name: "Power",
                initials: "POW",
                description: "Power stat affect your capability of using different kind of weapons, the more power your hero has, the heavier weapon she or he can equip, and the heavier shield.",
                image: "src:blablabl",
                color: "#FFF27D"
            },
            {
                name: "Combat",
                initials: "COM",
                description: "Combat refers to the chance of a critical strike in combat. Critical strikes increase damage by a substantial amount, ranging from 1.5 times damage, all the way up to 10, and more. This attribute is often favorable for characters that attack fast, such as dual wielding classes.",
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
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        width: 92%;
        margin: 4vh 0 0vh 8%;
        section{
            display: flex;
            p {
                color: yellow;
            }
        }
    }
}

</style>