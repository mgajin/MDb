<template>
    <v-container>
        <v-row>
            <v-col cols=6 class="pa-1">
                <v-form @submit="searchMovie">
                    <v-text-field
                        solo
                        v-model="search"
                        label="Search movie"
                        prepend-inner-icon="mdi-magnify"    
                    ></v-text-field>
                </v-form>
            </v-col>
            <v-col cols=4 class="pa-1">
                <v-select
                    solo
                    v-model="genre"
                    :items="getGenres"
                    label="Genre"
                ></v-select>
            </v-col>
            <v-col cols=2 class="d-flex flex-column align-center">
                <v-btn icon @click="clearFilter"><v-icon>mdi-refresh</v-icon></v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'FilterMoviesForm',
    data() {
        return {
            search: '',
            genre: ''
        }
    },
    watch: {
        genre: function(value) {
            this.getByGenre(value)
        }
    },
    computed: mapGetters(['getGenres']),
    methods: {
        ...mapActions(['SEARCH_MOVIES', 'FILTER_MOVIES']),
        searchMovie(e) {
            e.preventDefault()
            this.SEARCH_MOVIES(this.search)
            this.genre = ''
        },
        getByGenre(genre) {
            this.FILTER_MOVIES(genre)
            this.search = ''
        },
        clearFilter() {
            this.genre = ''
        }
    }
}
</script>