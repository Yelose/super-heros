<script>
import { mapState } from "pinia";
import { userCardsFavoritesStore} from "../stores/favorites";
import Card from "./Card.vue";
import Notes from "../components/Notes.vue"
import NewCard from "./NewCard.vue";

export default {
    computed: {
        ...mapState(userCardsFavoritesStore, {
            favoritesHeroes: "favoritesHeroes"
        })
    },
    components: { Card, Notes, NewCard }
}
</script>
 
<template>
    <NewCard />
    <main class="favorites-container">
        <div id="test" v-for="cardsfavorites in Cardsfavorites" :key="key"  style="color:white;">
            {{ cardsfavorites }}
        </div>
       
        <Card> </Card>
        </main>
</template>
<style lang="scss">
.favorites-container {
    width: calc(83vw - 150px);
    padding: 3vw;
    display: flex;
    flex-flow: column-reverse nowrap;
    align-items: flex-start;
    margin-bottom: 10vh;

    .favorites-item-container {
        justify-content: space-between;
        width: 100%;
        border: 3px solid #CFA25B;
        border-radius: calc(0.3vw + 0.3vh);
        display: flex;
        justify-content: space-between;
        align-items: center;

        .card-container {
            background: rgb(53, 53, 53);
            width: 14vw;
            height: 22vw;
            border-radius: 4%;
            max-width: 130px;
            max-height: 205px;
            
            .card-frame {
                width: 100%;
                height: 100%;
                display: flex;
                flex-flow: column nowrap;
                justify-content: flex-start;
                align-items: center;
                background-image: url(../assets/img/marco.PNG);
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                border-radius: 4%;

                h4 {
                    margin-top: 17%;
                    font-size: clamp(8px, 1.5vw, 15px);
                    color: #D9D9D9;
                    font-weight: 100;
                }

                .hero-img-md {
                    width: 60%;
                    margin-bottom: 4%;
                }
            }
            
            p{
            width: 14vw;
            height: 22vw; 
            
            }
        }
    }
}
</style>

