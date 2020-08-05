<template>
    <v-container>
        <v-row>
            <v-col cols=12>
                <v-card>
                    <v-container>
                        <v-card-title v-text="'Watchlist'" class="headline"></v-card-title>
                        <v-row>
                            <v-col 
                                cols=6 sm=4 md=3 lg=2
                                v-for="movie in getWatchlist.movies" 
                                :key="movie._id"
                            >
                                <MovieCard :movie="movie" :btnText="'remove'" @action="removeMovie(movie._id)"/>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
            <v-col cols=12>
                <v-card>
                    <v-container>
                        <v-card-title v-text="'Reviews'" class="headline"></v-card-title>
                        <v-row>
                            <v-col 
                                cols=12
                            >
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import MovieCard from '../components/items/MovieCard'

export default {
    name: 'Profile',
    components: {
        MovieCard
    },
    computed: mapGetters(['getToken', 'getWatchlist']),
    methods: {
        ...mapActions(['GET_WATCHLIST', 'REMOVE_MOVIE']),
        removeMovie(movieId) {
            const payload = { token: this.getToken, movieId: movieId }
            this.REMOVE_MOVIE(payload)
        }
    },
    created() {
        const token = this.getToken
        this.GET_WATCHLIST(token)
    }

}
</script>
