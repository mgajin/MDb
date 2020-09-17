<template>
    <v-carousel
        cycle
        show-arrows-on-hover
    >
        <v-carousel-item
            v-for="movie in movies"
            :key="movie.id"
            :src="movie.poster"
            contain
        ></v-carousel-item>
    </v-carousel>
</template>

<script>
    export default {
        name: "MovieCarousel",
        props: ["movies"],
    };
</script>