<template>
  <v-card height="300px">
    <v-img :src="urlToImage" :alt="title" contain></v-img>
    <v-card-title>
      <v-card-actions>{{ title }}</v-card-actions>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    urlToImage: {
      type: String,
      default: '#'
    },
    title: { type: String, default: '' }
  }
}
</script>
