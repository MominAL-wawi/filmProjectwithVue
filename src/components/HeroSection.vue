<template>
  <section id="hero" class="hero-section">
    <div class="container my-4">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-6">
          <div class="search-container position-relative">
            <input
              v-model="searchQuery"
              type="search"
              class="form-control search-input"
              placeholder="I'm Looking For..."
            />
            <i class="fa-solid fa-magnifying-glass search-icon"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10">
          <div class="hero-container position-relative">
            <!-- Updated hero image path to use actual movie poster -->
            <img
              :src="`/img/images/bg.jpg`"
              alt="Avengers Endgame"
              class="img-fluid hero-image"
            />
            <div class="hero-content position-absolute">
              <div class="hero-tags d-flex flex-wrap gap-3 mb-3">
                <span class="badge bg-primary">
                  <i class="fa-solid fa-film me-2"></i>Action/Thriller
                </span>
                <span class="badge bg-secondary">
                  <i class="fa-solid fa-calendar-days me-2"></i>2019
                </span>
                <span class="badge bg-info">
                  <i class="fa-solid fa-clock me-2"></i>3h 10m
                </span>
              </div>
              <h1 class="hero-title text-white fw-bold">Avengers: Endgame</h1>
              <p class="hero-description text-white-50 mt-3">
                The epic superhero saga against Thanos
              </p>
              <div class="hero-buttons mt-4">
                <button class="btn btn-primary btn-lg me-3" @click="watchNow">
                  <i class="fa-solid fa-play me-2"></i>Watch Now
                </button>
                <button class="btn btn-outline-light btn-lg" @click="addToList">
                  <i class="fa-solid fa-plus me-2"></i>Add to List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const searchQuery = ref("");

const watchNow = () => {
  console.log("Watch Now clicked");
};

const addToList = () => {
  console.log("Add to List clicked");
};
</script>
