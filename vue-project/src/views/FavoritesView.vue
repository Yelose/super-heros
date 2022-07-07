<script setup>
import Favorites from "@/components/Favorites.vue";
import MyCards from "../components/MyCards.vue";
import Notes from "../components/Notes.vue";
</script>

<template>
<div>
  
  <main>
    <Favorites />
    
  </main>
  <aside>
    <MyCards></MyCards>
  </aside>

</div>

</template>

<style lang="scss" scoped>
     
      @media screen and (max-width:800px){
         aside{
          display: none;
         }
         main{
          width: 100%;
         }
      } 
        
      
     

</style>
