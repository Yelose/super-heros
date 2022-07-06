<script setup>
import Favorites from "@/components/Favorites.vue";
import MyCards from "../components/MyCards.vue";
import Notes from "../components/Notes.vue";
</script>

<template>
  <main>
    <Favorites />
    <MyCards></MyCards>
    
  </main>
  <aside>
    <MyCards></MyCards>
  </aside>
</template>
