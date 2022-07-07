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
   margin-bottom: 1vw;
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
   form{
     
      width: 4vw;
      height: 2vW;
      border:1px solid #e10c0cf5;
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