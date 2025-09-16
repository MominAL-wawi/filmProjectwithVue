<template>
  <section id="tvShows" class="tv-shows-section py-5">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="section-title">TV Shows</h1>
        </div>
      </div>

      <div class="row g-4 justify-content-center mb-4">
        <div
          v-for="show in tvShows.slice(0, 5)"
          :key="show.id"
          class="col-6 col-md-4 col-lg-2"
        >
          <div class="movie-card" @click="selectShow(show)">
            <div class="movie-image-container position-relative">
              <img
                :src="`/img/images/tvshows/${show.title
                  .toLowerCase()
                  .replace(/[^a-z0-9]/g, '-')}.jpg`"
                :alt="show.title"
                class="img-fluid movie-image"
              />
              <div class="movie-rating position-absolute">
                <i class="fa-regular fa-star text-warning"></i>
                {{ show.rating }}
              </div>
            </div>
            <div class="movie-info text-center mt-3">
              <h5 class="movie-title text-white">{{ show.title }}</h5>
              <p class="movie-genre text-muted">
                {{ show.genre }} • {{ show.year }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row g-4 justify-content-center mb-4">
        <div
          v-for="show in tvShows.slice(5, 10)"
          :key="show.id"
          class="col-6 col-md-4 col-lg-2"
        >
          <div class="movie-card" @click="selectShow(show)">
            <div class="movie-image-container position-relative">
              <img
                :src="`/img/images/tvshows/${show.title}.jpg`"
                :alt="show.title"
                class="img-fluid movie-image"
              />
              <div class="movie-rating position-absolute">
                <i class="fa-regular fa-star text-warning"></i>
                {{ show.rating }}
              </div>
            </div>
            <div class="movie-info text-center mt-3">
              <h5 class="movie-title text-white">{{ show.title }}</h5>
              <p class="movie-genre text-muted">
                {{ show.genre }} • {{ show.year }}
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

const tvShows = ref([
  {
    id: 1,
    title: "Game of Thrones",
    genre: "Action/Fantasy",
    year: 2011,
    rating: 9.2,
  },
  {
    id: 2,
    title: "Stranger Things",
    genre: "Horror/Sci-fi",
    year: 2016,
    rating: 8.7,
  },
  {
    id: 3,
    title: "Breaking Bad",
    genre: "Drama/Crime",
    year: 2008,
    rating: 9.5,
  },
  {
    id: 4,
    title: "Squid Game",
    genre: "Action/Mystery",
    year: 2021,
    rating: 8.0,
  },
  {
    id: 5,
    title: "The Walking Dead",
    genre: "Thriller/Horror",
    year: 2010,
    rating: 8.1,
  },
  {
    id: 6,
    title: "La-casa-de -papel",
    genre: "Action/Crime",
    year: 2017,
    rating: 8.2,
  },
  {
    id: 7,
    title: "Vikings",
    genre: "Adventure/Drama",
    year: 2013,
    rating: 8.5,
  },
  { id: 8, title: "Arrow", genre: "Sci-fi/Crime", year: 2012, rating: 7.5 },
  {
    id: 9,
    title: "Prison-Break",
    genre: "Action/Crime",
    year: 2005,
    rating: 8.2,
  },
  {
    id: 10,
    title: "The-100",
    genre: "Action/Adventure",
    year: 2014,
    rating: 7.6,
  },
]);

const selectShow = (show) => {
  console.log("Selected TV show:", show.title);
};

const loadMore = () => {
  console.log("Load more TV shows");
};
</script>
