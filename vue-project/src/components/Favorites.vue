<script></script>

<template>
  <main class="favorites-container">
    <button>
      <h3>Add my personalized card</h3>
    </button>
    <div
      v-for="superHero in $root.favorites"
      class="favorites-item-container"
      v-bind:style="{ background: superHero.color + '80' }"
    >
      <div class="cards-and-stats">
        <section
          class="card-container"
          v-bind:style="{ background: superHero.color }"
        >
          <div v-on:click="" class="card-frame">
            <h4>{{ superHero.name }}</h4>
            <img class="hero-img-md" v-bind:src="superHero.images.sm" alt="" />
            <div class="card-stats-container">
              <section class="stat-bar">
                <img
                  class="stat-img"
                  src="/src/assets/img/espada2.png"
                  alt=""
                />
                <div class="colorless-bar">
                  <div
                    class="attack-bar"
                    v-bind:style="{
                      width: superHero.powerstats.strength + '%',
                    }"
                  ></div>
                </div>
              </section>
              <section class="stat-bar">
                <img
                  class="stat-img"
                  src="/src/assets/img/escudo2.png"
                  alt=""
                />
                <div class="colorless-bar">
                  <div
                    class="def-bar"
                    v-bind:style="{
                      width: superHero.powerstats.durability + '%',
                    }"
                  ></div>
                </div>
              </section>
            </div>
          </div>
        </section>
        <section class="stats-container">
          <div class="int stat">
            <span>INT</span>
            <span>{{ superHero.powerstats.intelligence }}</span>
          </div>
          <div class="str stat">
            <span>STR</span><span>{{ superHero.powerstats.strength }}</span>
          </div>
          <div class="spd stat">
            <span>SPD</span><span>{{ superHero.powerstats.speed }}</span>
          </div>
          <div class="dur stat">
            <span>DUR</span><span>{{ superHero.powerstats.durability }}</span>
          </div>
          <div class="pow stat">
            <span>POW</span><span>{{ superHero.powerstats.power }}</span>
          </div>
          <div class="com stat">
            <span>COM</span><span>{{ superHero.powerstats.combat }}</span>
          </div>
        </section>
      </div>

      <div>
        <section class="card-description-container">
          <h3 class="full-name">{{ superHero.biography.fullName }}</h3>
          <article>
            <p>
              Group Afiliation: {{ superHero.connections.groupAffiliation }}
            </p>
          </article>
          <article>
            <p>Relatives: {{ superHero.connections.relatives }}</p>
          </article>
          <article>
            <p>
              Ocuppation: {{ superHero.work.base }}
              {{ superHero.work.occupation }}
            </p>
          </article>
        </section>
        <section class="my-notes">
          <h3 class="full-name">My Notes</h3>
        </section>
      </div>
    </div>
  </main>
</template>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.full-name {
  font-family: "Kelly Slab", cursive;
  color: #fff27d;
  font-weight: 400;
  font-family: "Kenia", cursive;
  -webkit-text-stroke: 1px black;
}
.favorites-container {
  display: flex;
  width: calc(83vw - 150px);
  padding: 3vw;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;

  button {
    background-color: hsla(0, 0%, 0%, 0.6);
    border-radius: calc(0.3vw + 0.3vh);
    border-color: #cfa25b;
    width: 100%;
    padding: 1vh 1vw;
  }

  .favorites-item-container {
    display: flex;
    flex-flow: row wrap-reverse;
    width: 100%;
    border: 3px solid #cfa25b;
    border-radius: calc(0.3vw + 0.3vh);
    margin-top: 5vh;
    padding: 2px;

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
          color: #d9d9d9;
          font-weight: 100;
        }

        .hero-img-md {
          width: 60%;
          margin-bottom: 4%;
        }
      }
    }
  }
  .stats-container {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    padding-left: 0.7vw;
    span {
      justify-content: space-between;
      padding: 0.3vh 0.5vw;
      align-items: stretch;
      font-size: clamp(6px, 1.5vw, 15px);
    }
  }
  .card-description-container {
    display: flex;
    flex-flow: column;
    align-content: flex-start;
    article {
      display: flex;
      p {
        color: white;
        font-size: clamp(6px, 1.3vw, 13px);
      }
    }
  }
}
.stat {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.int {
  background-color: #fff27d;
}
.str {
  background-color: #df5f5f;
}
.spd {
  background-color: #a19740;
}
.dur {
  background-color: #7ba4f3;
}
.pow {
  background-color: #824084;
}
.com {
  background-color: #9ca69d;
}
</style>
