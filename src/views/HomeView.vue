<template>
  <div class="home-view">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Category Section -->
    <CategorySection />

    <!-- Movies Section -->
    <MoviesSection />

    <!-- TV Shows Section -->
    <TVShowsSection />

    <!-- Live Now Section -->
    <LiveNowSection />

    <!-- Pricing Section -->
    <PricingSection />

    <!-- Comments Section -->
    <CommentsSection />

    <!-- Stats Section -->
    <StatsSection />
  </div>
</template>

<script setup>
import HeroSection from "@/components/HeroSection.vue";
import CategorySection from "@/components/CategorySection.vue";
import MoviesSection from "@/components/MoviesSection.vue";
import TVShowsSection from "@/components/TVShowsSection.vue";
import LiveNowSection from "@/components/LiveNowSection.vue";
import PricingSection from "@/components/PricingSection.vue";
import CommentsSection from "@/components/CommentsSection.vue";
import StatsSection from "@/components/StatsSection.vue";
</script>
