<script setup>
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
  </main>
</template>
<style lang="scss">
.home-view-container {
  display: flex;
}
</style>
