<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get latest news!</h1>
    </section>
    <post-list :posts="loadedPosts" />
  </div>
</template>

<script>
  import PostList from "@/components/Posts/PostList";
  export default {
    components: {
      PostList
    },
    asyncData( context) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve( {
            loadedPosts: [
              {
                id: 1,
                title: "test title",
                preview: "preview text",
                thumbnail: "https://sendy-go.s3-eu-west-1.amazonaws.com/inventory_organized/Naivas/n3985.jpg"
              },
              {
                id: 2,
                title: "test title  two",
                preview: "preview text two",
                thumbnail: "https://sendy-go.s3-eu-west-1.amazonaws.com/inventory_organized/Naivas/n3985.jpg"
              },
            ]
          })
        }, 1500)
      }).then( data => {
        return data
      }).catch(e => {
        context.error(e)
      })
    },
    created() {

    }
  }
</script>

<style scoped>
  .intro {
    height: 300px;
    position: relative;
    padding: 30px;
    box-sizing: border-box;
    background-position: center;
    background-size: cover;
    background-image: url('~assets/images/main-page-background.jpg');
  }

  .intro h1 {
    position: absolute;
    top: 10%;
    left: 5%;
    width: 90%;
    font-size: 1.5rem;
    color: black;
    background-color: rgb(211, 211, 211);
    padding: 10px;
    border-radius: 10px;
    box-shadow: 3px 3px 3px black;
    box-sizing: border-box;
    border: 1px solid black;
  }

  @media (min-width: 768px) {
    .intro h1 {
      font-size: 2rem;
    }
  }
</style>
