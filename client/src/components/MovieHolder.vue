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
                <v-col cols=6 sm=7 md=8 lg=9>
                    <v-card-text align=start>
                        <v-btn 
                            v-for="genre in movie.genre" 
                            :key=genre 
                            v-text="genre"
                            class="ma-1"
                        ></v-btn>
                    </v-card-text>
                    <v-card-text 
                        v-text="movie.plot"
                        align=justify
                        class="hidden-xs-only"
                    ></v-card-text>
                </v-col>
                <v-col cols=12>
                    <v-card-text 
                        v-text="movie.plot"
                        align=justify
                        class="hidden-sm-and-up pa-0 mb-2"
                    ></v-card-text>
                    <v-actions>
                        <v-btn
                            block
                            v-text="'save to watchlist'"
                            color="primary" 
                        ></v-btn>
                    </v-actions>
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