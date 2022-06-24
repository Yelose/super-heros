<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import MyCards from "./components/MyCards.vue";
</script>

<template>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Kenia&family=KoHo:wght@400;600&family=Koh+Santepheap:wght@700&display=swap" rel="stylesheet">  
  <header>
    <Header></Header>
  </header>
  <aside>
    <MyCards></MyCards>
  </aside>

  <RouterView />
</template>

<style lang="scss">
@use "./assets/base";

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  margin-top: calc(5vw + 10vh);
  min-height: 100vh;
  background-image: url("./assets/img/heroesfondo.png");
  background-repeat: no-repeat;
  background-position: left;
  background-attachment: fixed;
  background-size: cover;
}
#app {
  margin: 0 auto;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}


/* @media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
