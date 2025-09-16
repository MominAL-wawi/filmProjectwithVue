import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    isAuthenticated: false,
    movies: [],
    tvShows: [],
    categories: [],
  },
  getters: {
    isLoggedIn: (state) => state.isAuthenticated,
    currentUser: (state) => state.user,
    allMovies: (state) => state.movies,
    allTVShows: (state) => state.tvShows,
    allCategories: (state) => state.categories,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
      state.isAuthenticated = true;
    },
    LOGOUT(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
    SET_MOVIES(state, movies) {
      state.movies = movies;
    },
    SET_TV_SHOWS(state, shows) {
      state.tvShows = shows;
    },
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
  },
  actions: {
    login({ commit }, credentials) {
      // Your login logic here
      if (credentials.username === "momen" && credentials.password === "1234") {
        const user = { username: credentials.username, loginTime: new Date() };
        commit("SET_USER", user);
        localStorage.setItem("arabflex_user", JSON.stringify(user));
        return Promise.resolve(user);
      } else {
        return Promise.reject(new Error("username:momen & password:1234"));
      }
    },
    logout({ commit }) {
      commit("LOGOUT");
      localStorage.removeItem("arabflex_user");
    },
    fetchMovies({ commit }) {
      // Fetch movies from API
      const movies = [
        {
          id: 1,
          title: "Black Panther",
          genre: "Action/Adventure",
          year: 2018,
          rating: 7.5,
        },
        {
          id: 2,
          title: "Black Adam",
          genre: "Action/Sci-fi",
          year: 2022,
          rating: 6.9,
        },
        // Add more movies...
      ];
      commit("SET_MOVIES", movies);
    },
  },
  modules: {},
});
