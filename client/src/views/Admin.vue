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
            <v-col 
                cols=12
                md=6
                v-for="movie in getImdbMovies" 
                :key="movie._id"
            >
                <MovieWideCard :movie="movie" @action="addMovie(movie)"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import MovieWideCard from '../components/items/MovieWideCard'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'Admin',
    data() {
        return {
            search: ''
        }
    },
    components: {
        MovieWideCard
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