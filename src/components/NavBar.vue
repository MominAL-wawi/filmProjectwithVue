<template>
  <nav class="navbar navbar-expand-lg navbar-dark" id="nav">
    <div class="container">
      <h1 class="navbar-brand mb-0 fw-bold">
        Arab <span class="span1">Flex</span>
      </h1>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link active" href="#header">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#category">Categories</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#movies">Movies</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#tvShows">TV Shows</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#liveNow">Live Now</a>
          </li>
        </ul>
        <div class="d-flex align-items-center">
          <button class="btn btn-outline-primary btn-sm me-2">
            {{ currentUser?.username || "User" }}
          </button>
          <button @click="handleLogout" class="btn btn-outline-danger btn-sm">
            <i class="fas fa-sign-out-alt"></i>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "NavBar",
  computed: {
    ...mapGetters(["currentUser"]),
  },
  methods: {
    ...mapActions(["logout"]),
    handleLogout() {
      this.logout();
      this.$router.push("/");
    },
  },
};
</script>
