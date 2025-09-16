<template>
  <div
    class="login-bg d-flex align-items-center justify-content-center min-vh-100"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10 col-xl-8">
          <LoginForm @login-success="handleLoginSuccess" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "LoginView",
  components: {
    LoginForm,
  },
  methods: {
    handleLoginSuccess() {
      this.$router.push("/dashboard");
    },
  },
};
</script>
