<template>
    <v-container>
        <v-row>
            <v-col align=center>
                <MovieCarousel :movies="getMovies" />
            </v-col>
        </v-row>
        <v-sheet elevation=8>
            <v-row>
                <v-col
                    cols=12
                    align=center
                >
                    <h2>Fan favorites</h2>
                </v-col>
                <v-col cols=12>
                    <MovieSlideGroup :movies="getMovies" />
                </v-col>
            </v-row>
        </v-sheet>
        <br>
        <v-sheet elevation=8>
            <v-row>
                <v-col
                    cols=12
                    align=center
                >
                    <h2>Top rated</h2>
                </v-col>
                <v-col cols=12>
                    <MovieSlideGroup :movies="getMovies" />
                </v-col>
            </v-row>
        </v-sheet>
    </v-container>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";
    import MovieCarousel from "../components/items/MovieCarousel";
    import MovieSlideGroup from "../components/items/MovieSlideGroup";

    export default {
        name: "Home",
        components: {
            MovieCarousel,
            MovieSlideGroup,
        },
        methods: {
            ...mapActions(["GET_MOVIES"]),
        },
        created() {
            this.GET_MOVIES();
        },
        computed: mapGetters(["getMovies"]),
    };
</script>