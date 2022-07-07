<script>
</script>

<template>
      <div class="mynotes-container">
         <p>My Notes</p>
         <section class="container-form">
               <form>
                  <textarea class="text"></textarea>
               </form>
         </section>
      </div> 
</template>
<style lang="scss" scoped>
.mynotes-container{
   margin-right: 2vw;
   display:flex;
   flex-flow: column;
   justify-content:center;
   text-align: center;
   
   .container-form{
      width: 100%;
      height: 100%;
           padding: 2%;
            background-image: url('../assets/img/pergamino.png');
            -webkit-transform:rotate(90deg);
            background-repeat: no-repeat;
            background-size:contain;
            background-position: center;
   }
     .text{
           -webkit-transform:rotate(-90deg);
            background-color: transparent;
            width: 80%;
            height: 800%;
            padding:2vh; 
            border: none;
            resize: none;  
     }
     p{
      font-family:'Kenia', cursive;
      color: #FFF27D;
     }
}
</style>