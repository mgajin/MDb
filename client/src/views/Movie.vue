<template>
    <v-container>
        <MovieHolder :movie="getMovie" :userReview="getUserReview"/>
        <v-row>
            <v-col cols=12>
                <v-btn @click.stop="showDialog" v-text="'rate movie'"></v-btn>
                <RateMovieForm :movie="getMovie"/>
            </v-col>
            <v-col cols=12 v-for="review in getReviews" :key="review._id">
                <v-card>
                    <v-card-subtitle class="pb-0" v-text="review.user.username"></v-card-subtitle>
                    <v-card-title v-text="review.comment"></v-card-title>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import MovieHolder from '../components/MovieHolder'
import RateMovieForm from '../components/forms/RateMovieForm'
import { mapActions, mapGetters } from 'vuex'

export default {
    props: ['id'],
    name: 'Movie',
    components: {
        MovieHolder,
        RateMovieForm
    },
    methods: {
        ...mapActions(['GET_MOVIE', 'GET_MOVIE_REVIEWS', 'GET_REVIEW']),
        showDialog() {
            this.$store.commit('show_review_dialog')
        }
    },
    created() {
        this.GET_MOVIE(this.id)
        this.GET_MOVIE_REVIEWS(this.id)
        this.GET_REVIEW(this.getUser)
    },
    computed: mapGetters(['getMovie', 'getReviews', 'getUser', 'getUserReview', 'getReviewDialog'])
}
</script>