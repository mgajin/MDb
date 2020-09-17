const state = {
    reviewDialog: false,
}

const getters = {
    getReviewDialog: (state) => state.reviewDialog,
}

const mutations = {
    show_review_dialog: (state) => (state.reviewDialog = true),
    close_review_dialog: (state) => (state.reviewDialog = false),
}

export default {
    state,
    getters,
    mutations,
}
