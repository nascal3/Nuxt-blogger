import Vuex from 'vuex'

export default () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts',
                [
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
              )
            resolve()
          }, 1500)
        }).then( data => {
          context.store.commit('setPosts', data.loadedPosts)
        }).catch(e => {
          context.error(e)
        })
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts(state ) {
        return state.loadedPosts
      }
    }
  })
}
