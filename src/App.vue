<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>


    <div class="wrapper">
      <img alt="" class="logo" src="@/assets/owl.svg" width="125" height="125" />


      <nav>
        <RouterLink to="/"> Home</RouterLink>
        <RouterLink to="/popular">Popular</RouterLink>
        <RouterLink to="/watchlist">WatchList</RouterLink>
        <RouterLink to="/friends">Friends</RouterLink>
        <RouterLink to="/favorites">Favorites</RouterLink>
        <RouterLink to="/account">Account</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <div class="top-bar">
    <div class="top-bar_categories">
      <a href="">Movies & TV Shows &#9660;</a>
    </div>

    <input placeholder="Search by Movie, TV Show, Cast or Genre" &#128269; />

  </div>
</template>

<style scoped>
.logo {
  margin-left: 25px;
}

.wrapper {
  background: #6e4b4b;
  width: 25%;
  height: 2500px;
  margin: -20px -20px;
  padding-top: 5px;
}

.wrapper nav {
  margin-left: 20px;
  gap: 0px;
  display: flex;
  flex-direction: column;
}

a {
  text-decoration: none;
  padding: 40px;

}

.top-bar {
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 200px;
  gap: 1000px;

}

.top-bar_categories {
  position: relative;

}

input {
  border: none;
  width: 250px;
  height: 30px;
  background-color: rgb(201, 201, 201);

}
</style>
