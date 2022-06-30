<script setup>
<<<<<<< HEAD
import Home from "../components/Home.vue";
import MyCards from "../components/MyCards.vue";
</script>

<template>
  <main>
    <Home></Home>
    <MyCards />
=======
  import Home from "../components/Home.vue";
  import MyCards from "../components/MyCards.vue";
</script>

<template>
  <main class="home-view-container">
    <section>
      <Home></Home>
    </section>
    <aside>
      <MyCards></MyCards>
    </aside>
>>>>>>> 4d0f42b44c346bb256f05203f81a09462648b976
  </main>
</template>
<style lang="scss">
.home-view-container{
  display: flex;
}
</style>
