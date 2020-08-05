<template>
    <v-container>
        <v-row>
            <v-col cols=12>
                <MovieHolder :movie="getMovie" :userReview="getUserReview"/>
                <ReviewDialog :movie="getMovie"/>
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
import ReviewDialog from '../components/forms/ReviewDialog'
import { mapActions, mapGetters } from 'vuex'

export default {
    props: ['id'],
    name: 'Movie',
    components: {
        MovieHolder,
        ReviewDialog
    },
    methods: {
        ...mapActions(['GET_MOVIE', 'GET_MOVIE_REVIEWS', 'GET_REVIEW'])
    },
    watch: {
        getReviews: function (value) {
            if (value.length) {
                const payload = { reviews: this.getReviews, user: JSON.parse(this.getUser) }
                this.GET_REVIEW(payload)
            }
        }
    },
    computed: mapGetters(['getMovie', 'getReviews', 'getUser', 'getUserReview']),
    created() {
        this.GET_MOVIE(this.id)
        this.GET_MOVIE_REVIEWS(this.id)
    }
}
</script>