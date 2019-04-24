<template>
  <v-app dark>
    <v-toolbar>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title><nuxt-link to="/">Home</nuxt-link> </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat><nuxt-link to="/inspire">Inspiration</nuxt-link></v-btn>
        <v-btn flat to="/inspire">Link Two</v-btn>
        <v-btn flat @click="increment">Increment</v-btn>
        Counter:{{ counter }}
      </v-toolbar-items>
    </v-toolbar>

    <section class="hero has-text-centered is-primary">
      <v-sheet class="d-flex" color="teal lighten-3" height="150">
        <div class="container text-xs-center">
          <h1 class="display-2">PWA News</h1>
          <h2 class="headline">All the headlines making the wavy!</h2>
        </div>
      </v-sheet>
    </section>
    <nuxt />
  </v-app>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    counter() {
      return this.$store.state.counter
    }
  },
  methods: {
    ...mapMutations({
      increment: 'increment'
    })
  }
}
</script>

<style lang="stylus">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
}
a {
  color #fff !important
  text-decoration none
}
</style>
