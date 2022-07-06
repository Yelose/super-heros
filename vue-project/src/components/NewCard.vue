<script>
 export default {
    data() {
        return {
            isShowing:false,
            newSuperHero:[],
            newName:'',
            adding:false,
        }
    },
    methods: {
        changeState() {
            if (this.isShowing) {
                this.isShowing = false;
                return;
            }

        this.isShowing = true;
        }
        /* addName() {
            this.newSuperHero.push({
                id: this.newSuperHero.length + 1,
                name: this.newName,
            })
            this.newName = ''
        }, */
    },
 }
</script>

<template>
<button v-on:click="changeState">
    <h3>Add my personalized card</h3>
</button>
    <section v-show="isShowing" class="newcard-container">
        <div class="favorites-item-container">
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

<style lang="scss" scoped>a,
button {
  cursor: url("/src/assets/img/cursordedo.png"), help;
}
.add-img {
    width: 2vw;
    margin:2vw 2vw 5vw 2vw;
}
.newcard-container {
    width: 100%;
    .favorites-item-container {
        background-color: rgba(0, 0, 0, 0.5);
    }
}

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

::placeholder {
  color: #CFA25B;
}

</style>