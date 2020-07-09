<template>
    <v-card>
        <v-container>
            <v-row dense>
                <v-col cols=12>
                    <v-card-title v-text="movie.title"></v-card-title>
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
                <v-col cols=12 class="hidden-sm-and-up">
                    <v-card-text 
                        v-text="movie.plot"
                        align=justify
                    ></v-card-text>
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