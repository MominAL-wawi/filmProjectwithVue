<template>
  <div class="login-card rounded-4 overflow-hidden">
    <div class="row g-0 min-vh-100 align-items-center">
      <!-- Form Section -->
      <div class="col-12 col-md-6 p-5">
        <div class="text-center mb-4">
          <!-- Updated image path to use actual user profile image -->
          <img
            :src="`/img/images/download.jpg`"
            alt="User Profile"
            class="profile-image rounded-circle mb-3"
            width="120"
            height="120"
          />
          <h2 class="text-white fw-bold mb-2">{{ welcomeMessage }}</h2>
          <p class="text-muted">Sign in to access Arab Flex</p>
        </div>

        <!-- Error/Success Messages -->
        <div v-if="errorMessage" class="error-message p-3 mb-3 text-center">
          <i class="fas fa-exclamation-triangle me-2"></i>
          {{ errorMessage }}
        </div>

        <div v-if="successMessage" class="success-message p-3 mb-3 text-center">
          <i class="fas fa-check-circle me-2"></i>
          {{ successMessage }}
        </div>

        <!-- Login Form -->
        <form @submit.prevent="handleLogin">
          <div class="mb-3">
            <div class="input-group">
              <span class="input-group-text border-end-0">
                <i class="fas fa-user text-primary"></i>
              </span>
              <input
                v-model="loginForm.username"
                type="text"
                class="form-input form-control border-start-0 ps-2"
                placeholder="Username"
                required
              />
            </div>
          </div>

          <div class="mb-4">
            <div class="input-group">
              <span class="input-group-text border-end-0">
                <i class="fas fa-lock text-primary"></i>
              </span>
              <input
                v-model="loginForm.password"
                :type="showPassword ? 'text' : 'password'"
                class="form-input form-control border-start-0 border-end-0 ps-2"
                placeholder="Password"
                required
              />
              <button
                type="button"
                class="input-group-text border-start-0"
                @click="togglePassword"
              >
                <i
                  :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"
                  class="text-primary"
                ></i>
              </button>
            </div>
          </div>

          <div class="mb-3 form-check">
            <input
              v-model="loginForm.rememberMe"
              type="checkbox"
              class="form-check-input"
              id="rememberMe"
            />
            <label class="form-check-label text-muted" for="rememberMe">
              Remember me
            </label>
          </div>

          <button
            type="submit"
            class="btn btn-primary w-100 py-3 fw-bold"
            :disabled="isLoading"
          >
            <span
              v-if="isLoading"
              class="spinner-border spinner-border-sm me-2"
            ></span>
            <i v-else class="fas fa-sign-in-alt me-2"></i>
            {{ isLoading ? "Signing In..." : "Sign In" }}
          </button>
        </form>

        <div class="text-center mt-4">
          <p class="text-muted">
            New to Arab Flex?
            <a href="#" class="text-primary text-decoration-none fw-bold">
              Create Account
            </a>
          </p>
          <a href="#" class="text-primary text-decoration-none">
            Forgot Password?
          </a>
        </div>
      </div>

      <!-- Logo Section -->
      <div
        class="col-12 col-md-6 logo-section d-flex align-items-center justify-content-center p-5"
      >
        <div class="text-center">
          <div class="mb-4">
            <i class="fas fa-film text-white" style="font-size: 4rem"></i>
          </div>
          <h1 class="text-white fw-bold mb-3">
            Arab <span class="text-warning">Flex</span>
          </h1>
          <p class="text-white-50 mb-4">
            Your ultimate destination for movies and TV shows
          </p>
          <div class="d-flex justify-content-center gap-3">
            <div class="text-center">
              <div class="text-white fw-bold fs-4">10K+</div>
              <div class="text-white-50 small">Movies</div>
            </div>
            <div class="text-center">
              <div class="text-white fw-bold fs-4">5K+</div>
              <div class="text-white-50 small">TV Shows</div>
            </div>
            <div class="text-center">
              <div class="text-white fw-bold fs-4">24/7</div>
              <div class="text-white-50 small">Live TV</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "LoginForm",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
        rememberMe: false,
      },
      errorMessage: "",
      successMessage: "",
      isLoading: false,
      showPassword: false,
    };
  },
  computed: {
    welcomeMessage() {
      const hour = new Date().getHours();
      if (hour < 12) return "Good Morning!";
      if (hour < 18) return "Good Afternoon!";
      return "Good Evening!";
    },
  },
  methods: {
    ...mapActions(["login"]),
    async handleLogin() {
      this.errorMessage = "";
      this.successMessage = "";

      if (!this.loginForm.username.trim() || !this.loginForm.password.trim()) {
        this.errorMessage = "Please fill in all fields";
        return;
      }

      this.isLoading = true;

      try {
        await this.login(this.loginForm);
        this.successMessage = "Login successful! Redirecting...";

        setTimeout(() => {
          this.$emit("login-success");
        }, 2000);
      } catch (error) {
        this.errorMessage = error.message || "Invalid username or password";
      } finally {
        this.isLoading = false;
      }
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
  },
  mounted() {
    // Check for remembered user
    const rememberedUser = localStorage.getItem("arabflex_user");
    if (rememberedUser) {
      const userData = JSON.parse(rememberedUser);
      this.loginForm.username = userData.username;
      this.loginForm.rememberMe = true;
    }
  },
};
</script>
