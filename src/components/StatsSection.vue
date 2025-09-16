<template>
  <section id="generalStats" class="stats-section py-5">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="section-title">General Stats</h1>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-12 col-lg-6">
          <div class="stats-bars">
            <div v-for="stat in stats" :key="stat.name" class="stat-item mb-4">
              <h5>{{ stat.name }}</h5>
              <div class="progress-bar-container">
                <div
                  class="progress-bar"
                  :style="{
                    width: stat.percentage + '%',
                    backgroundColor: stat.color,
                  }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-6">
          <div class="social-stats">
            <ul class="list-unstyled">
              <li
                v-for="social in socialStats"
                :key="social.platform"
                class="mb-3"
              >
                <span class="fw-bold">{{ social.followers }} Followers</span
                ><br />
                on {{ social.platform }}, thank you from the heart
                <i class="fa-solid fa-heart text-danger ms-1"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const stats = ref([
  { name: "Movies", percentage: 75, color: "#007bff" },
  { name: "TV Shows", percentage: 60, color: "#28a745" },
  { name: "Live News", percentage: 45, color: "#ffc107" },
  { name: "Live Sport", percentage: 80, color: "#dc3545" },
]);

const socialStats = ref([
  { platform: "Facebook", followers: "3k" },
  { platform: "Twitter", followers: "3.3k" },
  { platform: "Instagram", followers: "4.6k" },
]);
</script>
