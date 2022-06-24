<script setup>
    
        let stats = [
            {
                name: "Intelligence",
                initials: "INT",
                description: "controls a character's ability to comprehend foreign languages and their skill in magic. Intelligence controls how many skill points the character gets at level up. It also controls the rate at which experience points are earned, or the amount needed to level up.",
                image: "./assets/img/staff.png",
                color: "#FFF27D"
            },
            {
                name: "Strength",
                initials: "STR",
                description: "is a  measure of how physically strong a character is, it controls the power and damage of melee attacks, the maximum weight the character can carry, and hit points. Armor and weapons might also have a Strength requirement to use them. A measure of how sturdy a character is",
                image: "src:blablabl",
                color: "#DF5F5F"
            },
            {
                name: "Speed",
                initials: "SPD",
                description: "or movement is an inherited trait possessed by every living being. Even the most stationary of animals like the tube worm weave and dance gracefully at the ocean floor.",
                image: "src:blablabl",
                color: "#A19740"
            },
            {
                name: "Durability",
                initials: "DUR",
                description: "is the property which guarantees the ability to survive a certain amount of force. Not to be confused with Endurance. Durability is the ability to withstand damage, while Endurance is a measure of stamina.",
                image: "src:blablabl",
                color: "#7BA4F3"
            },
            {
                name: "Power",
                initials: "POW",
                description: "stat affect your capability of using different kind of weapons, the more power your hero has, the heavier weapon she or he can equip, and the heavier shield.",
                image: "src:blablabl",
                color: "#824084"
            },
            {
                name: "Combat",
                initials: "COM",
                description: "refers to the chance of a critical strike in combat. Critical strikes increase damage by a substantial amount, ranging from 1.5 times damage, all the way up to 10, and more. This attribute is often favorable for characters that attack fast, such as dual wielding classes.",
                image: "src:blablabl",
                color: "#9CA69D"
            }
        ]
</script>

<template>

<main>
    <div class="stats-container" v-for="(item, index) in stats">
        <section>
            <p v-bind:style="{background: item.color}"  class="initials">{{item.initials}} </p>
        </section>
        <section>
            
            <p><span>{{item.name}}: </span>{{item.description}}</p>
        </section>
        <section>
            <img src="../assets/img/staff.png">
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
        align-items: center;
        width: calc(75% - 80px);
        margin: 4vh 0 0vh 8%;
        padding: calc(.5vw + 1vh);
        section{
            display: flex;
            .initials{
                padding: calc(.3vh + .2vh);
                margin: 0 2vw;
                width: calc(2vw + 3.5vh);
                text-align: center;
                color: black;
                font-weight: bold;
            }
            p {
                color: #E3D764;
            }
            img {
                width: calc(2.5vw + 2.5vh);
                height: calc(2.5vw + 2.5vh);
                max-width: 100px;
                max-height: 100px;
                min-width: 50px;
                min-height: 50px;
            }
        }
    }
}

</style>