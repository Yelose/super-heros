<script>

</script>

<template>
  <section class="header-container">
    <main>
      <section>
        <div class="logo">
          <img src="../assets/logoScrummers.png" alt="">
        </div>
        <div>
          <h1>SUPER HERO MULTIVERSE</h1>
        </div>
      </section>
      <div>
        <input type="text" placeholder="Search">
      </div>
    </main>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/stats">Stats</RouterLink>
      <RouterLink to="/races">Races</RouterLink>
      <RouterLink to="/favorites">Favorites</RouterLink>
    </nav>
  </section>

</template>
<style lang="scss">
 .header-container {
   background-color: rgba(0, 0, 0, 0.7);
   display: flex;
   flex-direction: column;
   width: 100vw;
 }

 section {
   main {
     width: 100%;
     display: flex;
     justify-content: space-between;
     align-items: center;

     section {
       display: flex;
       flex-direction: row;
       align-items: center;
     }

     input {
       display: flex;
       justify-self: flex-end;
       border-radius: 4px;
       padding: calc(.5vw + .5vh);
       margin-right: 3vw;
     }
   }

   .logo {
     width: calc(6vw + 7vh);
     height: calc(6vw + 7vh);
     max-width: 250px;
     max-height: 250px;
     min-width: 90px;
     min-height: 90px;
     padding: calc(1vw + 1vh);
   }
 }
 nav{
  display: flex;
  justify-content: center;
  margin-top: -2vw;
  a {
    margin: 0 2vw;
    padding: 0 2vw;
    font-size: clamp(20px, 2.5vw, 33px);
    color: #fff;
    text-decoration: none;
  }
   a.router-link-exact-active {
   color: #E3D764;
   border: 3px solid #E3D764;
   border-radius: 8px;
 }

 }

 .logo {
   display: flex;
   width: 200px;
   height: 200px;
 }



 @media (hover: hover) {
   a:hover {
     color:#dad5a9;
   }
 }

 // nav {
 //   width: 100%;
 //   font-size: clamp(18px, 2vw, 30px);
 //   text-align: center;
 //   font-family: 'KoHo', sans-serif;
 // }


 // nav a.router-link-exact-active:hover {
 //   background-color: transparent;
 // }

 // nav a {
 //   display: inline-block;
 //   padding: 0 1rem;
 //   border-left: 1px solid var(--color-border);
 // }

 // nav a:first-of-type {
 //   border: 0;
 // }
</style>