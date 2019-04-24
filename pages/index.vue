<template>
  <section class="section">
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex v-for="(article, index) in articles" :key="index" xs6 md3>
          <a :href="article.url" target="_blank">
            <news-card
              :url-to-image="article.urlToImage"
              :title="article.title"
            />
          </a>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import NewsCard from '~/components/NewsCard.vue'
export default {
  components: {
    NewsCard
  },
  async asyncData({ app }) {
    const { articles } = await app.$axios.$get(
      `https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=${
        process.env.API_KEY
      }`
    )

    return { articles }
  }
}
</script>
