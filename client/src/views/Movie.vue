<template>
    <v-container>
        <v-row>
            <v-col cols=12>
                <MovieHolder :movie="getMovie" :userReview="getUserReview"/>
                <ReviewDialog :movie="getMovie"/>
            </v-col>
            <v-col cols=12>
                <v-card>
                    <v-container>
                        <v-card-title v-text="'Reviews'"></v-card-title>
                        <v-row>
                            <v-col cols=12 v-for="review in getReviews" :key="review._id">
                                <ReviewCard 
                                    :title="review.comment"
                                    :text="review.user.username"
                                    :rating="review.rating" 
                                />
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
import MovieHolder from '../components/MovieHolder'
import ReviewDialog from '../components/forms/ReviewDialog'
import ReviewCard from '../components/items/ReviewCard'

export default {
    props: ['id'],
    name: 'Movie',
    components: {
        MovieHolder,
        ReviewDialog,
        ReviewCard
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
    methods: {
        ...mapActions(['GET_MOVIE', 'GET_MOVIE_REVIEWS', 'GET_REVIEW'])
    },
    created() {
        this.GET_MOVIE(this.id)
        this.GET_MOVIE_REVIEWS(this.id)
    }
}
</script>