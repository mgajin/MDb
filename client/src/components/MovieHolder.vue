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
                        <div class="d-flex flex-column mr-5">
                            <v-icon color=yellow>mdi-star</v-icon>
                            <label>{{ movie.rating }}/10</label>
                        </div>
                        <div class="d-flex flex-column mr-5">
                            <v-icon color=primary>mdi-star</v-icon>
                            <label>8/10</label>
                        </div>
                        <div class="d-flex flex-column mr-5">
                            <span>IMDb</span>
                            <label>{{ movie.imdbRating }}/10</label>
                        </div>
                    </v-card-actions>
                    <v-card-actions class="hidden-xs-only pa-1">
                        <v-btn
                            block
                            v-text="'save to watchlist'"
                            color="primary"
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
                        ></v-btn>
                    </v-card-actions>
                    <v-card-actions class="d-flex justify-space-around pa-0 mt-5">
                        <div class="d-flex flex-column">
                            <v-icon color=yellow>mdi-star</v-icon>
                            <label>{{ movie.rating }}/10</label>
                        </div>
                        <div class="d-flex flex-column">
                            <v-icon color=primary>mdi-star</v-icon>
                            <label>8/10</label>
                        </div>
                        <div class="d-flex flex-column">
                            <span>IMDb</span>
                            <label>{{ movie.imdbRating }}/10</label>
                        </div>
                    </v-card-actions>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
export default {
    name: 'MovieHolder',
    props: ['movie']
}
</script>