<template>
  <section id="category" class="category-section py-5">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="section-title">Category</h1>
        </div>
      </div>

      <div class="row g-4 justify-content-center mb-4">
        <div
          v-for="category in categories.slice(0, 4)"
          :key="category.id"
          class="col-6 col-md-3 col-lg-2"
        >
          <div
            class="category-card position-relative"
            @click="selectCategory(category)"
          >
            <img
              :src="`/img/images/${category.name.toLowerCase()}.jpg`"
              :alt="category.name"
              class="img-fluid category-image"
            />
            <div class="category-overlay position-absolute">
              <h5 class="category-title">{{ category.name }}</h5>
              <span class="category-count badge bg-primary">{{
                category.count
              }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="row g-4 justify-content-center mb-5">
        <div
          v-for="category in categories.slice(4, 8)"
          :key="category.id"
          class="col-6 col-md-3 col-lg-2"
        >
          <div
            class="category-card position-relative"
            @click="selectCategory(category)"
          >
            <img
              :src="`/img/images/${category.name.toLowerCase()}.jpg`"
              :alt="category.name"
              class="img-fluid category-image"
            />
            <div class="category-overlay position-absolute">
              <h5 class="category-title">{{ category.name }}</h5>
              <span class="category-count badge bg-primary">{{
                category.count
              }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center mt-5">
        <div class="col-12 col-md-8 col-lg-6">
          <div
            class="d-flex flex-wrap align-items-center justify-content-between"
          >
            <h1 class="mb-0">Last Added</h1>
            <div class="d-flex gap-2">
              <select
                v-model="selectedGenre"
                class="form-select form-select-sm"
              >
                <option value="All genres">All genres</option>
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
                <option value="Animation">Animation</option>
                <option value="Comedy">Comedy</option>
              </select>
              <select v-model="selectedYear" class="form-select form-select-sm">
                <option value="All the years">All the years</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const selectedGenre = ref("All genres");
const selectedYear = ref("All the years");

const categories = ref([
  { id: 1, name: "Action", count: 100 },
  { id: 2, name: "Comedy", count: 50 },
  { id: 3, name: "Thriller", count: 20 },
  { id: 4, name: "Horror", count: 80 },
  { id: 5, name: "Adventure", count: 100 },
  { id: 6, name: "Animated", count: 50 },
  { id: 7, name: "Crime", count: 20 },
  { id: 8, name: "rampage", count: 80 },
]);

const selectCategory = (category) => {
  console.log("Selected category:", category.name);
};
</script>
