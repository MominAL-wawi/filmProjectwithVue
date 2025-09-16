<template>
  <section id="ourPricing" class="pricing-section py-5">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="section-title">Our Pricing</h1>
        </div>
      </div>

      <div class="row g-4 justify-content-center mt-5">
        <div
          v-for="plan in pricingPlans"
          :key="plan.id"
          class="col-12 col-md-6 col-lg-4"
        >
          <div
            class="pricing-card text-center"
            :class="{ featured: plan.featured }"
          >
            <h3 class="plan-name">{{ plan.name }}</h3>
            <p class="plan-description">{{ plan.description }}</p>
            <h2 class="plan-price">${{ plan.price }}</h2>
            <button class="btn btn-primary" @click="selectPlan(plan)">
              See Details
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const pricingPlans = ref([
  {
    id: 1,
    name: "Gold Package",
    description:
      "Perfect for casual viewers who want access to our basic movie and TV show library with standard quality streaming.",
    price: 80,
    featured: false,
  },
  {
    id: 2,
    name: "Platinum Package",
    description:
      "Great for families and regular viewers who want HD quality, multiple device access, and premium content.",
    price: 150,
    featured: true,
  },
  {
    id: 3,
    name: "Silver Package",
    description:
      "Ultimate experience with 4K streaming, exclusive content, early access to new releases, and unlimited devices.",
    price: 350,
    featured: false,
  },
]);

const selectPlan = (plan) => {
  console.log("Selected plan:", plan.name);
};
</script>
