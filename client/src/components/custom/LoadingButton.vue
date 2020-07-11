<template>
    <v-btn block color=primary :disabled=loading :loading=loading @click="onClick">
        {{ text }}
        <span slot="loader" class="custom-loader">
            <v-icon>cached</v-icon>
        </span>
    </v-btn>
</template>

<script>
export default {
    name: 'LoadingButton',
    props: ['text', 'loading'],
    methods: {
        onClick() {
            this.$emit('clicked')
        }
    }
}
</script>

<style>
    .custom-loader {
        animation: loader 1s infinite;
        display: flex;
    }
    @-moz-keyframes loader {
        from {
        transform: rotate(0);
        }
        to {
        transform: rotate(360deg);
        }
    }
    @-webkit-keyframes loader {
        from {
        transform: rotate(0);
        }
        to {
        transform: rotate(360deg);
        }
    }
    @-o-keyframes loader {
        from {
        transform: rotate(0);
        }
        to {
        transform: rotate(360deg);
        }
    }
    @keyframes loader {
        from {
        transform: rotate(0);
        }
        to {
        transform: rotate(360deg);
        }
    }
</style>