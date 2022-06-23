<script>

</script>

<template>
    <section>
        <main>
            <div class="logo">
              <img src="../assets/logoScrummers.png" alt="">
            </div>
            <div>
              <h1>SUPER HERO MULTIVERSE</h1>
            </div>
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
    section{
        display: flex;
        flex-direction: column;
        background-color: rgba(0, 0, 0, 0.7);
        width: 100vw;
        main{
            display: flex;
        }
        .logo{
            width: 13vw;
            height: 13vw;
            max-width: 200px;
            max-height: 200px;
            min-width: 90px;
            min-height: 90px;
            padding: 2vw;
        }
    }
.logo {
  display: flex;
  width: 200px;
  height: 200px;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: clamp(18px, 2vw, 30px);
  text-align: center;
  font-family: 'KoHo', sans-serif;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>