<template>
    <v-card height=100% class="d-flex flex-column">
        <v-card-title v-text="title"></v-card-title>
        <v-card-text v-text="text"></v-card-text>
        <v-rating
            align=end 
            v-model=rating 
            length=5 
            readonly
            small
        ></v-rating>
    </v-card>
</template>

<script>
export default {
    name: 'ReviewCard',
    props: ['title', 'text', 'rating']
}
</script>

<style>

</style>