<template>
    <v-container>
        <v-row>
            <v-col cols=12>
                <v-form @submit="searchMovie">
                    <v-text-field
                        v-model="search"
                        label="Search IMDb"
                        solo-inverted
                        prepend-inner-icon="mdi-magnify"
                    ></v-text-field>
                </v-form>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols=12>
                <h3>Movies found: {{ getImdbMovies.length }}</h3>
            </v-col>
            <v-col
                cols=6 sm=4 md=3 lg=2 
                v-for="movie in getImdbMovies" 
                :key="movie.imdbId"
            >
                <MovieCard :movie="movie" :btnText="'add movie'" @action="addMovie(movie)"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import MovieCard from '../components/items/MovieCard'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'Admin',
    data() {
        return {
            search: ''
        }
    },
    components: {
        MovieCard
    },
    computed: mapGetters(['getImdbMovies', 'getToken']),
    methods: {
        ...mapActions(['SEARCH_IMDB', 'ADD_MOVIE']),
        searchMovie(e) {
            e.preventDefault()
            const payload = { token: this.getToken, movie: this.search }
            this.SEARCH_IMDB(payload)
        },
        addMovie(movie) {
            const payload = { token: this.getToken, id: movie.imdbId }
            this.ADD_MOVIE(payload)
        }
    }
}
</script>