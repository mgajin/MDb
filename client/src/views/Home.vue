<template>
  <v-container>
    <v-layout row wrap>
      <v-flex>
        <v-carousel>
          <v-carousel-item
            v-for="movie in getMovies"
            :src="movie.poster"
            :key="movie.id"
          >
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex 
        xs6 sm4 md3 lg2 
        v-for="movie in getMovies"
        :key="movie.id"
      >
        <v-card>
          <v-img :src="movie.poster" contain></v-img>
          <v-card-actions>
            <v-btn block color="primary--text" @click="moviePage(movie._id)">action</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      movies: []
    }
  },
  methods: {
    ...mapActions(['GET_MOVIES', 'GET_MOVIE']),
    async moviePage(id) {
      await this.GET_MOVIE(id)
      this.$router.push(`/movies/${id}`)
    }
  },
  created() {
    this.GET_MOVIES()
  },
  computed: mapGetters(['getMovies'])
}
</script>