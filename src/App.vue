<template>
  <div id="app">
    <!-- Added navigation bar for authenticated users -->
    <NavBar v-if="isAuthenticated" />

    <router-view />

    <!-- Added footer for authenticated users -->
    <FooterComponent v-if="isAuthenticated" />
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import NavBar from "./components/NavBar.vue";
import FooterComponent from "./components/FooterSection.vue";

export default {
  name: "App",
  components: {
    NavBar,
    FooterComponent,
  },
  setup() {
    const store = useStore();

    const isAuthenticated = computed(() => store.getters.isLoggedIn);

    const savedUser = localStorage.getItem("arabflex_user");
    if (savedUser) {
      store.commit("SET_USER", JSON.parse(savedUser));
    }

    return {
      isAuthenticated,
    };
  },
};
</script>

<style>
/* Global styles will be imported from CSS files */
</style>
