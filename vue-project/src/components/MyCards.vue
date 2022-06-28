<script>

</script>

<template>

    <div class="my-cards-container">
        <header>
            <h3>My Cards</h3>
            <img src="../assets/img/star.png" alt="star">
        </header>
        <main>
            <div v-for="superHero in $root.MyCards">
                {{superHero.name}}
                
            </div>
        </main>
    </div>
</template>

<style lang="scss">
    .my-cards-container{
        width: 20vw;
        min-width: 180px;
        position: fixed;
        right: 0;
        top: calc(15vh + 2vw);
        margin: 2vh 1vw 0 0;
        height: 75vh;
        padding: 1vh 2vw;
        overflow: auto;
        header{
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                width: 2vw;
                max-width: 25px;
                min-width: 18px;
                margin-left: .5vw;
            }
        }
    }
</style>