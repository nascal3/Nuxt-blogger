<template>
  <div class="posts-page">
    <post-list :posts="loadedPosts" />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import PostList from "@/components/Posts/PostList";
    export default {
      components: {
        PostList
      },
      fetch(context) {

      },
      computed: {
        ...mapGetters({
          loadedPosts: 'loadedPosts'
        })
      }
    }
</script>

<style scoped>
  .posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
