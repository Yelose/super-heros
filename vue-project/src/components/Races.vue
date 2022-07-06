<script>
import Invento from "./invento.vue";</script>

<template>
  <h1>Races</h1>
  <div v-for="race in $root.races">
    <p>{{ race }}</p>
    <Invento/>
  </div>
</template>
<style lang="scss"></style>
