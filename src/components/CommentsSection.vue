<template>
  <section id="topComments" class="comments-section py-5">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="section-title">Top Comments</h1>
        </div>
      </div>

      <div class="row justify-content-center mt-4">
        <div class="col-12 col-lg-8">
          <div class="add-comment-section d-flex align-items-center mb-4">
            <!-- Updated user avatar path to use actual user image -->
            <img
              :src="`/img/images/man.jpg`"
              alt="User"
              class="user-avatar rounded-circle me-3"
            />
            <input
              v-model="newComment"
              type="text"
              class="form-control"
              placeholder="Add Comment......"
              @keyup.enter="addComment"
            />
            <button class="btn btn-primary ms-3" @click="addComment">
              Add
            </button>
          </div>

          <div
            v-for="comment in comments"
            :key="comment.id"
            class="comment-item d-flex mb-4"
          >
            <!-- Updated comment user avatar paths to use actual user /img/images -->
            <img
              :src="`/img/images/${comment.author}.jpg`"
              :alt="comment.author"
              class="user-avatar rounded-circle me-3"
            />
            <div class="comment-content">
              <p class="comment-text">{{ comment.text }}</p>
              <span class="comment-date text-muted">{{ comment.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const newComment = ref("");

const comments = ref([
  {
    id: 1,
    author: "man2",
    text: "We stand a lot in front of your proposal and the taste of your eclecticism. Trust that you are one of those members who stole from us even the simple letters that we try to keep up with and respond to. I bow my thanks to your words and your wonderful topic. All thanks to you, as long as you are so creative",
    date: "Dec 2, 2022 11:32:04 pm",
  },
  {
    id: 2,
    author: "man3",
    text: "How beautiful you are always with the sweetness of your feeling, your choices and your tastes. I always long for your handshakes and your new perfume. May you always be in the best condition.",
    date: "Feb 20, 2022 05:40:09 pm",
  },
]);

const addComment = () => {
  if (newComment.value.trim()) {
    const comment = {
      id: comments.value.length + 1,
      author: "Current User",
      text: newComment.value,
      date: new Date().toLocaleString(),
    };
    comments.value.unshift(comment);
    newComment.value = "";
  }
};
</script>
