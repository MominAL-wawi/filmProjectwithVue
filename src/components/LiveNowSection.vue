<template>
  <section id="liveNow" class="live-now-section py-5">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="section-title">Live Now</h1>
        </div>
      </div>

      <div class="row g-4 justify-content-center mt-4">
        <div
          v-for="liveContent in liveContents"
          :key="liveContent.id"
          class="col-12 col-md-6 col-lg-4"
        >
          <div
            class="live-card position-relative"
            @click="watchLive(liveContent)"
          >
            <img
              :src="`/img/images/${liveContent.src.toLowerCase()}.jpg`"
              :alt="liveContent.title"
              class="img-fluid live-image"
            />
            <div class="live-badge position-absolute">Live</div>
            <div class="viewers-count position-absolute">
              {{ liveContent.viewers }} viewers
            </div>
            <div class="live-info position-absolute">
              <img
                :src="`/img/images/${liveContent.channel.toLowerCase()}.png`"
                :alt="liveContent.channel"
                class="channel-logo"
              />
              <div class="live-text">
                <h6>{{ liveContent.title }}</h6>
                <p>{{ liveContent.description }}</p>
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

const liveContents = ref([
  {
    id: 1,
    title: "World Cup 2022",
    description: "Argentina VS Poland",
    channel: "bein-sports",
    viewers: "1.9M",
    src: "Sport",
  },
  {
    id: 2,
    title: "Africa's fiercest creatures",
    description: "fierce competition",
    channel: "national",
    viewers: "546K",
    src: "animal",
  },
  {
    id: 3,
    title: "Turbo",
    description: "He's Fast. They're Furious",
    channel: "Turbo",
    viewers: "336K",
    src: "Turbo",
  },
]);

const watchLive = (content) => {
  console.log("Watch live:", content.title);
};
</script>
