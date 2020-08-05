<template>
    <v-card>
        <v-container>
            <v-row dense>
                <v-col cols=12>
                    <v-card-title  
                        v-text="movie.title"
                        align=justify
                        class="headline pa-1"
                    ></v-card-title>
                </v-col>
                <v-col cols=6 sm=5 md=4 lg=3>
                    <v-img :src="movie.poster" height=100% contain></v-img>
                </v-col>
                <v-col cols=6 sm=7 md=8 lg=9 class="d-flex flex-column justify-space-between">
                    <v-card-text align=start class="pa-1">
                        <v-btn 
                            v-for="genre in movie.genre" 
                            :key=genre 
                            v-text="genre"
                            class="ma-1 ml-0 mr-2"
                        ></v-btn>
                    </v-card-text>
                        <v-card-text 
                        v-text="movie.plot"
                        align=justify
                        class="hidden-xs-only pa-1"
                    ></v-card-text>
                    <v-card-actions class="hidden-xs-only">
                        <v-btn text height=100% class="pa-1">
                            <div class="d-flex flex-column">
                                <v-icon color=yellow>mdi-star</v-icon>
                                <label>{{ movie.rating }}/5</label>
                            </div>
                        </v-btn>
                        <v-btn text height=100% class="pa-1" v-if="userReview">
                            <div class="d-flex flex-column">
                                <v-icon color=primary>mdi-star</v-icon>
                                <label>{{ userReview.rating }}/5</label>
                            </div>
                        </v-btn>
                        <v-btn 
                            text 
                            height=100% 
                            class="pa-1" 
                            v-if="!userReview"
                            @click="openDialog"
                        >
                            <div class="d-flex flex-column">
                                <v-icon color=white>mdi-star</v-icon>
                                <label>0/5</label>
                            </div>
                        </v-btn>
                        <v-btn text height=100% class="pa-1">
                            <div class="d-flex flex-column">
                                <span>IMDb</span>
                                <label>{{ movie.imdbRating }}/10</label>
                            </div>
                        </v-btn>
                    </v-card-actions>
                    <v-card-actions class="hidden-xs-only pa-1">
                        <v-btn
                            block
                            v-text="'save to watchlist'"
                            color="primary"
                            @click="saveToWatchlist"
                        ></v-btn>
                    </v-card-actions>
                </v-col>
                <v-col cols=12 class="hidden-sm-and-up">
                    <v-card-text 
                        v-text="movie.plot"
                        align=justify
                        class="pa-0 mb-2"
                    ></v-card-text>
                    <v-card-actions class="pa-0">
                        <v-btn
                            block
                            v-text="'save to watchlist'"
                            color="primary" 
                            @click="saveToWatchlist"
                        ></v-btn>
                    </v-card-actions>
                    <v-card-actions class="d-flex justify-space-around pa-0 mt-4">
                        <v-btn text height=100% class="pa-1">
                            <div class="d-flex flex-column">
                                <v-icon color=yellow>mdi-star</v-icon>
                                <label>{{ movie.rating }}/5</label>
                            </div>
                        </v-btn>
                        <v-btn text height=100% class="pa-1" v-if="userReview">
                            <div class="d-flex flex-column">
                                <v-icon color=primary>mdi-star</v-icon>
                                <label>{{ userReview.rating }}/5</label>
                            </div>
                        </v-btn>
                        <v-btn 
                            text 
                            height=100% 
                            class="pa-1" 
                            v-if="!userReview"
                            @click="openDialog"
                        >
                            <div class="d-flex flex-column">
                                <v-icon color=white>mdi-star</v-icon>
                                <label>0/5</label>
                            </div>
                        </v-btn>
                        <v-btn text class="pa-1" height=100%>
                            <div class="d-flex flex-column">
                                <span>IMDb</span>
                                <label>{{ movie.imdbRating }}/10</label>
                            </div>
                        </v-btn>
                    </v-card-actions>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'MovieHolder',
    props: ['movie', 'userReview'],
    computed: mapGetters(['getToken']),
    methods: {
        ...mapActions(['INSERT_MOVIE']),
        openDialog() {
            this.$store.commit('show_review_dialog')
        },
        saveToWatchlist() {
            const payload = { token: this.getToken, movieId: this.movie._id }
            this.INSERT_MOVIE(payload)
        }
    },
}
</script>