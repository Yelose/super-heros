<script>
import { mapState } from 'pinia';
import { userCardsFavoritesStore } from '../stores/favorites';

export default {
    computed: {
        ...mapState(userCardsFavoritesStore, {
           favoritesHeroes: 'favoritesHeroes'
        })
    },
}

</script>

<template>

</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-flow: column;
  width: calc(83vw - 150px);
  .stats-clas-container {
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