<script setup>
import { ref, onMounted } from 'vue';

const movies = ref([]);

onMounted(async () => {
  try {
    const response = await fetch("http://www.omdbapi.com/?apikey=dd3e5989&s=popular");
    const data = await response.json();

    if (data && data.Search) {
      movies.value = data.Search;
    } else {
      console.error('No movie data found in the response:', data);
    }
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
});
</script>

<template>
  <div>
    <h1>Popular Movies</h1>
    
    <div class="movies-grid">
      <div v-for="movie in movies" :key="movie.imdbID" class="movie-item">
        <img :src="movie.Poster" :alt="movie.Title" />
        <p>{{ movie.Title }} ({{ movie.Year }})</p>
      </div>
    </div>
  </div>
    
</template>

<style scoped>
h1{
  margin-left: 100px;
  margin-top: -75px;
}
.movies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 5fr));
  gap: 150px;
  margin-left: -250px;
}

.movie-item {
  text-align: center;
}

.movie-item img {
  max-width: 100%;
  height: auto;
}

.movie-item:hover{
  transform: scale(1.1);
  transition: 500ms;
}
</style>