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
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            width: 9vw;
            height: 8vw;
            padding:2vh; 
            border: transparent;  
     }
     p{
      font-family:'Kenia', cursive;
      color: #FFF27D;
     }
}
</style>