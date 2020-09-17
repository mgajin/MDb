<template>
    <v-hover v-slot:default="{ hover }">
        <v-card
            height=100%
            class="d-flex flex-column"
        >
            <v-img
                :src="movie.poster"
                width=100%
            ></v-img>
            <v-expand-transition>
                <div
                    v-if="hover"
                    class="d-flex flex-column transition-fast-in-fast-out black v-card--reveal display-3 white--text"
                >
                    <p class="headline text-caption">{{ movie.title }}</p>
                    <div class="d-flex flex-column align-center pa-0">
                        <span class="caption">({{ movie.rating }})</span>
                        <v-rating
                            v-model=movie.rating
                            length=5
                            readonly
                            dense
                            size="18"
                        ></v-rating>
                    </div>
                    <v-btn
                        outlined
                        v-text="'see movie'"
                        @click="onClick"
                    ></v-btn>
                </div>
            </v-expand-transition>
        </v-card>
    </v-hover>
</template>

<script>
    export default {
        name: "MovieHoverCard",
        props: ["movie"],
        methods: {
            onClick() {
                this.$emit("action");
            },
        },
    };
</script>

<style lang="scss">
    .v-card--reveal {
        overflow: hidden;
        align-items: center;
        bottom: 0;
        justify-content: space-around;
        opacity: 0.8;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 2;

        .headline {
            text-align: center;
        }
    }
</style>