<script>
 export default {
    data() {
        return {
            newCard:false,
            newSuperHero:[],
            newName:'',
            adding:false,
        }
    },
    methods: {
        changeState() {
            if (this.newCard) {
                this.newCard = false;
                return;
            }

        this.newCard = true;
        }
    },
 }
</script>

<template>
    <div class="button">
        <button v-on:click="changeState">
            <h3>Add my personalized card</h3>
        </button>
    </div>

    <section v-show="newCard" class="newcard-container">
        <div class="newcard-item-container">
            <div class="card-container">
                <div class="card-frame">
                    <div class="add-name">
                        <input
                        id= "add-new-Name"
                        placeholder="Add Name"
                        >
                    </div>
                    
                    <input class="add-img" type="image" src="https://cdn-icons-png.flaticon.com/512/1250/1250854.png" alt="Submit">
                    
                    <div class="card-stats-container">
                        <section class="stat-bar">
                            <img class="stat-img" src="/src/assets/img/espada2.png" alt="">
                            <div class="colorless-bar">
                                <div class="attack-bar">
                                </div>
                            </div>
                        </section>
                        <section class="stat-bar">
                            <img class="stat-img" src="/src/assets/img/escudo2.png" alt="">
                            <div class="colorless-bar">
                                <div class="def-bar">
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>    
    </section>
</template>

<style lang="scss" scoped>
.button {
    width: calc(83vw - 150px);
    padding: 3vw 3vw 0 3vw;
    margin-top: 3vw;

    a,
    button {
        cursor: url("/src/assets/img/cursordedo.png"), help;
        background-color: hsla(0, 0%, 0%, 0.6);
        border-radius: calc(0.3vw + 0.3vh);
        border-color: #CFA25B;
        width: 100%;
        padding: 1vh 1vw;
        order: 100000;
    }
    button:hover{
        background-color: rgba(207, 163, 91, 0.267);
         
    }
}
  
.newcard-container {
    width: calc(83vw - 150px);
    padding: 0 3vw 0 3vw;
    
    .newcard-item-container {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        width: 100%;
        border: 3px solid #CFA25B;
        border-radius: calc(0.3vw + 0.3vh);
        margin-top: 5vh;
        padding: 2px;
        background-color: rgba(207, 163, 91, 0.267);
        
        .card-container {
            background: #362810;
            width: 14vw;
            height: 22vw;
            border-radius: 4%;
            max-width: 130px;
            max-height: 205px;
            justify-content: center;

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
               
                #add-new-Name {
                    width: 100%;
                    text-align: center;
                    border-top-style: hidden;
                    border-right-style: hidden;
                    border-left-style: hidden;
                    border-bottom-style: hidden;
                    background-color: rgba(238, 238, 238, 0);
                    margin-top: 2vw;
                    outline: none;
                }
            }
            
            .add-img {
                width: 2vw;
                margin:1vw 1vw 2vw 1vw;
            }
        }
    }
}    


::placeholder {
  color: #CFA25B;
}

</style>