<template>
    <v-card height=100% class="d-flex flex-column">
        <v-card-title v-text="review.movie.title"></v-card-title>
        <v-card-text v-text="review.comment"></v-card-text>
        <v-rating
            align=end 
            v-model=review.rating 
            length=5 
            readonly
            small
        ></v-rating>
    </v-card>
</template>

<script>
export default {
    name: 'UserReviewCard',
    props: ['review']
}
</script>

<style>

</style>