<script setup lang="ts">

  const onClickHandler = (page: number) => {
    console.log(page);
  };

</script>

<template>
  <paginate
    :total-items="100"
    :items-per-page="10"
    :max-pages-shown="8"
    :current-page="1"
    :container-class="'home-container'"
    :on-click="onClickHandler"
  />
</template>

<style lang="scss">

  .pagination-container {
    display: flex;
    justify-content:center;
    align-items: center;
    column-gap: 1vw;
    margin: 0 0 8vw;
  }
  .paginate-buttons {
    width: 5vw;
    border-radius: 20px;
    cursor: pointer;
    cursor: url("/src/assets/img/cursordedo.png"), help;
    background-color: transparent;
    border: 1px solid rgb(217, 217, 217);
    color: #E3D764;
  }

  .active-page {
    background-color: #000000;
    border: 1px solid #000000;
    
  }
  .active-page:hover {
    background-color: #2988c8;
  }
</style>