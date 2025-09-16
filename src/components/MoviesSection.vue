<template>
  <section id="movies" class="movies-section py-5">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="section-title">Movies</h1>
        </div>
      </div>

      <div class="row g-4 justify-content-center mb-4">
        <div
          v-for="movie in movies.slice(0, 5)"
          :key="movie.id"
          class="col-6 col-md-4 col-lg-2"
        >
          <div class="movie-card" @click="selectMovie(movie)">
            <div class="movie-image-container position-relative">
              <img
                :src="`/img/images/movies/${movie.title}.jpg`"
                :alt="movie.title"
                class="img-fluid movie-image"
              />
              <div class="movie-rating position-absolute">
                <i class="fa-regular fa-star text-warning"></i>
                {{ movie.rating }}
              </div>
            </div>
            <div class="movie-info text-center mt-3">
              <h5 class="movie-title text-white">{{ movie.title }}</h5>
              <p class="movie-genre text-muted">
                {{ movie.genre }} • {{ movie.year }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row g-4 justify-content-center mb-4">
        <div
          v-for="movie in movies.slice(5, 10)"
          :key="movie.id"
          class="col-6 col-md-4 col-lg-2"
        >
          <div class="movie-card" @click="selectMovie(movie)">
            <div class="movie-image-container position-relative">
              <img
                :src="`/img/images/movies/${movie.title}.jpg`"
                :alt="movie.title"
                class="img-fluid movie-image"
              />
              <div class="movie-rating position-absolute">
                <i class="fa-regular fa-star text-warning"></i>
                {{ movie.rating }}
              </div>
            </div>
            <div class="movie-info text-center mt-3">
              <h5 class="movie-title text-white">{{ movie.title }}</h5>
              <p class="movie-genre text-muted">
                {{ movie.genre }} • {{ movie.year }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 text-center mt-4">
          <button class="btn btn-outline-primary btn-lg" @click="loadMore">
            <i class="fa-solid fa-plus me-2"></i>Load More
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const movies = ref([
  {
    id: 5,
    title: "Panther",
    genre: "Action/Adventure",
    year: 2018,
    rating: 7.5,
  },
  {
    id: 4,
    title: "BlackAdam",
    genre: "Action/Sci-fi",
    year: 2022,
    rating: 6.9,
  },
  {
    id: 3,
    title: "TheBatman",
    genre: "Action/Sci-fi",
    year: 2022,
    rating: 7.9,
  },
  {
    id: 2,
    title: "Spider-Man-NoWayHome",
    genre: "Action/Adventure",
    year: 2021,
    rating: 8.3,
  },
  {
    id: 1,
    title: "1917",
    genre: "Action/War",
    year: 2020,
    rating: 6.4,
  },
  {
    id: 10,
    title: "Top-Gun-Maverick",
    genre: "Drama/Action",
    year: 2022,
    rating: 8.4,
  },
  {
    id: 9,
    title: "No-Time -to-Die",
    genre: "Action/Thriller",
    year: 2021,
    rating: 7.3,
  },
  {
    id: 8,
    title: "Deadpool",
    genre: "Action/Comedy",
    year: 2017,
    rating: 8.0,
  },
  {
    id: 7,
    title: "Finding-Nemo",
    genre: "Animation/Comedy",
    year: 2003,
    rating: 8.2,
  },
  {
    id: 6,
    title: "Train-to-Busan",
    genre: "Thriller/Horror",
    year: 2016,
    rating: 7.6,
  },
]);

const selectMovie = (movie) => {
  console.log("Selected movie:", movie.title);
};

const loadMore = () => {
  console.log("Load more movies");
};
</script>
