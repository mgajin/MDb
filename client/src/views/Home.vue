<template>
  <div class="home">
    <section class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="title">Title</h1>
        </div>
        <div class="col-12">
          <Movies :movies="getMovies" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import Movies from '../components/Movies'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    Movies
  },
  methods: {
    ...mapActions(['GET_MOVIES'])
  },
  computed: mapGetters(['getMovies']),
  created() {
    this.GET_MOVIES()
  }
}
</script>
