<template>
    <v-container>
        <v-row>
            <v-col
                cols=6
                class="pa-1"
            >
                <v-form @submit="searchMovie">
                    <v-text-field
                        solo
                        v-model="search"
                        label="Search movie"
                        prepend-inner-icon="mdi-magnify"
                    ></v-text-field>
                </v-form>
            </v-col>
            <v-col
                cols=4
                class="pa-1"
            >
                <v-select
                    solo
                    v-model="genre"
                    :items="getGenres"
                    label="Genre"
                ></v-select>
            </v-col>
            <v-col
                cols=2
                class="d-flex flex-column align-center"
            >
                <v-btn
                    icon
                    @click="clearFilter"
                >
                    <v-icon>mdi-refresh</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";

    export default {
        name: "FilterMoviesForm",
        data() {
            return {
                search: "",
                genre: "",
            };
        },
        computed: {
            ...mapGetters(["getGenres"]),
            query: function () {
                if (this.genre != "") {
                    return `?genre=${this.genre}`;
                } else if (this.search != "") {
                    return `?title=${this.search}`;
                } else {
                    return "";
                }
            },
        },
        watch: {
            genre: function (value) {
                if (value != "") {
                    this.search = "";
                    this.GET_MOVIES(this.query);
                }
            },
            query: function (value) {
                if (value == "") {
                    this.GET_MOVIES();
                }
            },
        },
        methods: {
            ...mapActions(["GET_MOVIES"]),
            searchMovie(e) {
                e.preventDefault();
                this.genre = "";
                if (this.query != "") {
                    this.GET_MOVIES(this.query);
                }
            },
            clearFilter() {
                this.search = "";
                this.genre = "";
            },
        },
    };
</script>