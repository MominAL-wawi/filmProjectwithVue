/* eslint-disable prettier/prettier */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap";
// Import custom CSS
import "./css/style.css";
createApp(App).use(store).use(router).mount("#app");