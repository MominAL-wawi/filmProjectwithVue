<template>
  <div class="movie-detail-view">
    <div class="container py-5">
      <!-- Removed v-if to avoid conditional hook issues -->
      <div class="row" v-show="movie">
        <div class="col-12 col-lg-4">
          <img
            :src="`src/assets/img/images/movies/detailed/${
              movie
                ? movie.title.toLowerCase().replace(/[^a-z0-9]/g, '-')
                : 'default'
            }-poster.jpg`"
            :alt="movie ? movie.title : 'Movie'"
            class="img-fluid movie-poster"
          />
        </div>

        <div class="col-12 col-lg-8">
          <div class="movie-details">
            <h1 class="movie-title">{{ movie.title }}</h1>
            <div class="movie-meta mb-3">
              <span class="badge bg-primary me-2">{{ movie.genre }}</span>
              <span class="badge bg-secondary me-2">{{ movie.year }}</span>
              <span class="badge bg-info">{{ movie.duration }}</span>
            </div>

            <div class="movie-rating mb-3">
              <i class="fa-solid fa-star text-warning"></i>
              <span class="rating-value">{{ movie.rating }}/10</span>
            </div>

            <p class="movie-description">{{ movie.description }}</p>

            <div class="movie-actions mt-4">
              <button class="btn btn-primary btn-lg me-3" @click="watchMovie">
                <i class="fa-solid fa-play me-2"></i>Watch Now
              </button>
              <button
                class="btn btn-outline-light btn-lg me-3"
                @click="addToWatchlist"
              >
                <i class="fa-solid fa-plus me-2"></i>Add to Watchlist
              </button>
              <button
                class="btn btn-outline-secondary btn-lg"
                @click="shareMovie"
              >
                <i class="fa-solid fa-share me-2"></i>Share
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center" v-show="!movie">
        <h2>Movie not found</h2>
        <router-link to="/" class="btn btn-primary">Back to Home</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const movie = ref(null);

const movies = [
  {
    id: 1,
    title: "Black Panther",
    genre: "Action/Adventure",
    year: 2018,
    duration: "2h 14m",
    rating: 7.5,
    description:
      "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
  },
  {
    id: 2,
    title: "Black Adam",
    genre: "Action/Sci-fi",
    year: 2022,
    duration: "2h 5m",
    rating: 6.9,
    description:
      "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods, Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
  },
  {
    id: 3,
    title: "The Batman",
    genre: "Action/Sci-fi",
    year: 2022,
    duration: "2h 56m",
    rating: 7.9,
    description:
      "When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
  },
];

onMounted(() => {
  const movieId = parseInt(route.params.id);
  movie.value = movies.find((m) => m.id === movieId) || null;
});

const watchMovie = () => {
  if (movie.value) {
    console.log("Watch movie:", movie.value.title);
  }
};

const addToWatchlist = () => {
  if (movie.value) {
    console.log("Add to watchlist:", movie.value.title);
  }
};

const shareMovie = () => {
  if (movie.value) {
    console.log("Share movie:", movie.value.title);
  }
};
</script>
