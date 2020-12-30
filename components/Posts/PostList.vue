<template>
  <section class="post-list">
    <post-preview
      id="1"
      :is-admin="isAdmin"
      thumbnail="https://sendy-go.s3-eu-west-1.amazonaws.com/inventory_organized/Naivas/n3985.jpg"
      title="Hi there man"
      previewText="This is the preview text"
    />
  </section>
</template>

<script>
  import PostPreview from '@/components/Posts/PostPreview';
  export default {
    name: "PostList",
    components: {
      PostPreview
    },
    props: {
      isAdmin: {
        type: Boolean,
        default: false
      },
    },
  }
</script>

<style scoped>
  .post-list {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
</style>
