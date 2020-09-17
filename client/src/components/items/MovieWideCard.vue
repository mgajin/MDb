<template>
    <v-card
        height=100%
        class="d-flex justify-space-between"
    >
        <v-img
            :src="movie.poster"
            width=150px
            cover
        ></v-img>
        <v-card-text class="d-flex flex-column align-center justify-space-between">
            <v-card-title
                v-text="movie.title"
                class="pa-0"
            ></v-card-title>
            <v-rating
                readonly
                dense
                small
            ></v-rating>
            <v-btn
                color=primary
                v-text="'add movie'"
                @click="onClick"
            ></v-btn>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "MovieWideCard",
        props: ["movie"],
        methods: {
            onClick() {
                this.$emit("action");
            },
        },
    };
</script>