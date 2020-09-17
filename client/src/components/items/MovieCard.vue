<template>
    <v-card
        height="100%"
        class="d-flex flex-column"
    >
        <v-img :src="movie.poster"></v-img>
        <v-card-actions>
            <v-btn
                block
                color="primary--text"
                @click="onBtnClick"
            >
                {{ btnText }}
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "MovieCard",
        props: ["btnText", "movie"],
        methods: {
            onBtnClick() {
                this.$emit("action");
            },
        },
    };
</script>
