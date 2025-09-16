<template>
  <div>
    <NavBar />
    <HeroSection />
    <CategorySection />
    <MoviesSection />
    <TVShowsSection />
    <LiveSection />
    <PricingSection />
    <CommentsSection />
    <StatsSection />
    <FooterSection />
  </div>
</template>

<script>
// import NavBar from "@/components/NavBar.vue";
import HeroSection from "@/components/HeroSection.vue";
import CategorySection from "@/components/CategorySection.vue";
import MoviesSection from "@/components/MoviesSection.vue";
import TVShowsSection from "@/components/TVShowsSection.vue";
import LiveSection from "@/components/LiveNowSection.vue";
import PricingSection from "@/components/PricingSection.vue";
import CommentsSection from "@/components/CommentsSection.vue";
import StatsSection from "@/components/StatsSection.vue";
// import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "DashboardView",
  components: {
    // NavBar,
    HeroSection,
    CategorySection,
    MoviesSection,
    TVShowsSection,
    LiveSection,
    PricingSection,
    CommentsSection,
    StatsSection,
    // FooterSection,
  },
  mounted() {
    this.$store.dispatch("fetchMovies");
  },
};
</script>
