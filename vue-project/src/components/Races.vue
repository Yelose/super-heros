<script setup>

</script>

<template>
  <h1>Races</h1>
  <div v-for="race in $root.races">
    <p>{{ race }}</p>
   <div><span class="fa fa-star"></span></div>
  </div>
</template>
<style lang="scss"></style>
