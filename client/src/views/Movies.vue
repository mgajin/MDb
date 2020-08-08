<template>
    <v-container>
        <v-row>
            <v-col cols=12 class="pa-0">
                <FilterMoviesForm />
            </v-col>
        </v-row>
        <v-row>
            <v-col
                class="pa-1"
                cols=4 md=3 lg=2 
                v-for="movie in getMovies" 
                :key="movie._id"
            >
                <MovieHoverCard :movie="movie" @action="getMovie(movie._id)"/>
            </v-col>
        </v-row>        
    </v-container>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import FilterMoviesForm from '../components/forms/FilterMoviesForm'
import MovieHoverCard from '../components/items/MovieHoverCard'

export default {
    name: 'Movies',
    components: {
        FilterMoviesForm,
        MovieHoverCard
    },
    computed: mapGetters(['getMovies']),
    methods: {
        ...mapActions(['GET_MOVIES', 'GET_MOVIE']),
        async getMovie(movieId) {
            await this.GET_MOVIE(movieId)
            this.$router.push(`movies/${movieId}`)
        }
    },
    created() {
        this.GET_MOVIES()
    }
}
</script>