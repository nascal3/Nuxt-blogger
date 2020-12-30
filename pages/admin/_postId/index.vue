<template>
  <div class="admin-post-page">
    <section class="update-form">
      <admin-post-form :post="loadedPost" />
    </section>
  </div>
</template>

<script>
  import AdminPostForm from "@/components/Admin/AdminPostForm";
    export default {
      name: "index",
      layout: 'admin',
      components: {
        AdminPostForm
      },
      data() {
        return {
          loadedPost: {
            author: 'John Doe',
            title: 'Coming of age',
            content: 'The project is coming into its self',
            thumbnailLink: 'https://sendy-go.s3-eu-west-1.amazonaws.com/inventory_organized/Naivas/n3985.jpg'
          }
        }
      },
    }
</script>

<style scoped>
  .update-form {
    width: 90%;
    margin: 20px auto;
  }
  @media (min-width: 768px) {
    .update-form {
      width: 500px;
    }
  }
</style>
