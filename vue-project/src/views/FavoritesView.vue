<script setup>
  import Favorites from "@/components/Favorites.vue";
import MyCards from "../components/MyCards.vue";
</script>

<template>
  <main>
    <Favorites />
    <MyCards />
  </main>
  <aside>
    <MyCards></MyCards>
  </aside>
</template>
