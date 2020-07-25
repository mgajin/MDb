<template>
    <div class="d-flex justify-center">
        <v-slide-group :show-arrows="true" :center-active="true">
            <v-slide-item
                v-for="movie in movies"
                :key="movie.id"
                v-slot:default="{ active, toggle }"
            >
                <v-card class="ma-2" width=180>
                    <v-img :src="movie.poster" @click="toggle"></v-img>
                    <v-card-actions>
                        <v-btn 
                            block 
                            color="primary--text"  
                            v-text="'see movie'"
                            @click="moviePage(movie._id)"
                        ></v-btn>
                    </v-card-actions>
                </v-card>
            </v-slide-item>
        </v-slide-group>
    </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
    name:'MovieSlideGroup',
    props: ['movies', 'btnText'],
    methods: {
        ...mapActions(['GET_MOVIE']),
        async moviePage(id) {
            await this.GET_MOVIE(id)
            this.$router.push(`/movies/${id}`)
        }
    }
}
</script>