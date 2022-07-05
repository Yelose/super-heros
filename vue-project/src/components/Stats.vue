<script>
import { mapState } from 'pinia';
import { userStatsStore } from '../stores/stats';

  export default{
    computed: {
      ...mapState(userStatsStore, {
        stats: "stats"
      })
    }
  }
</script>

<template>
  <main>
    <div class="stats-container" v-for="(item, index) in stats">
      <section>
        <p v-bind:style="{ background: item.color }" class="initials">
          {{ item.initials }}
        </p>
      </section>
      <section>
        <p>
          <span>{{ item.name }}: </span>{{ item.description }}
        </p>
      </section>
      <section>
        <img :src="item.image" />
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-flow: column;
  width: calc(83vw - 150px);
  .stats-container {
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    padding: calc(0.5vw + 1vh);
    margin: 3vh 3vh 0 5vw;
    section {
      display: flex;
      .initials {
        padding: calc(0.3vh + 0.2vh);
        margin: 0 2vw;
        width: calc(2vw + 3.5vh);
        text-align: center;
        color: black;
        font-weight: bold;
      }
      p {
        color: #e3d764;
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
