<template>
    <v-container>
        <MovieHolder :movie="getMovie" />
    </v-container>
</template>

<script>

import MovieHolder from '../components/MovieHolder'
import { mapActions, mapGetters } from 'vuex'

export default {
    props: ['id'],
    name: 'Movie',
    components: {
        MovieHolder
    },
    methods: {
        ...mapActions(['GET_MOVIE'])
    },
    created() {
        this.GET_MOVIE(this.id)
    },
    computed: mapGetters(['getMovie'])
}
</script>