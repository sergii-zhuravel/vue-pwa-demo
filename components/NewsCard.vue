<template>
  <v-card height="300px">
    <v-img :src="article.urlToImage" :alt="article.title" contain></v-img>
    <v-card-title>
      <v-card-actions>{{ article.title }}</v-card-actions>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default() {
        return {
          urlToImage: '#',
          title: ''
        }
      }
    }
  }
}
</script>
