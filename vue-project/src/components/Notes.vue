<script>
</script>

<template>
<h3>My Notes</h3>
      <div class="mynotes-container">
        
         <section class="container-form">
               <form>
                  <textarea class="text"></textarea>
               </form>
         </section>
      </div> 
</template>
<style lang="scss" scoped>


.mynotes-container{
   
   display:flex;
   flex-direction: column;
   text-align: center;     
   background-image: url('../assets/img/pergamino.png');
   align-items: center; 
   width: calc(9vw + 9vh);
   height: calc(9vw + 9vh);
   background-repeat: no-repeat;
   background-size:contain;
   background-position: center;
   }

   form{
     margin-top:3vh;
     .text{
         //   -webkit-transform:rotate(90deg);
            background-color: transparent;
            width: calc(4vw + 4vh);
            height: calc(6vw + 6vh);
            margin-top: 4%;
            border: none;
            resize: none;
          
     }
     p{
      font-family:'Kenia', cursive;
      color: #FFF27D;
     }
}
</style>