<template>
    <v-alert
        type=error
        dismissible
        @input="onClose"
    >
        {{ text }}
    </v-alert>
</template>

<script>
    export default {
        name: "ErrorAlert",
        props: ["text"],
        methods: {
            onClose() {
                this.$emit("dismissed");
            },
        },
    };
</script>