<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <admin-post-form @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
  import axios from 'axios';
  import AdminPostForm from "@/components/Admin/AdminPostForm";

  export default {
    layout: 'admin',
    components: {
      AdminPostForm
    },
    methods: {
      onSubmitted(postData) {
        axios.post('https://nuxt-blogger-e2001-default-rtdb.firebaseio.com/posts.json', postData)
        .then(result => console.log(result))
        .catch(e => console.log(e))
      }
    },
  }
</script>

<style scoped>
  .new-post-form {
    width: 90%;
    margin: 20px auto;
  }

  @media (min-width: 768px) {
    .new-post-form {
      width: 500px;
    }
  }
</style>
