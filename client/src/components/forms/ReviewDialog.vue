<template>
    <v-dialog
        v-model=getReviewDialog
        persistent
        max-width=500
    >
        <v-card>
            <v-container>
                <v-row>
                    <v-col cols=12>
                        <v-card-title v-text="movie.title"></v-card-title>
                    </v-col>
                    <v-col
                        cols=12
                        class="text-center"
                    >
                        <v-rating v-model="rating"></v-rating>
                    </v-col>
                    <v-col cols=12>
                        <v-textarea
                            v-model="comment"
                            name="input-7-4"
                            label="Your thoughts"
                        ></v-textarea>
                    </v-col>
                    <v-col cols=12>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                @click="closeDialog"
                                v-text="'cancel'"
                            ></v-btn>
                            <v-btn
                                @click="submitReview"
                                v-text="'submit'"
                            ></v-btn>
                        </v-card-actions>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";

    export default {
        data() {
            return {
                rating: 1,
                comment: "",
            };
        },
        props: ["movie"],
        computed: mapGetters(["getReviewDialog", "getToken"]),
        methods: {
            ...mapActions(["ADD_REVIEW"]),
            closeDialog() {
                this.$store.commit("close_review_dialog");
            },
            submitReview() {
                const payload = {
                    movieId: this.movie._id,
                    rating: this.rating,
                    comment: this.comment,
                    token: this.getToken,
                };
                this.ADD_REVIEW(payload);
                this.closeDialog();
            },
        },
    };
</script>