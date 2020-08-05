import Axios from 'axios'

const state = {
    reviews: [],
    userReviews: [],
    userReview: null
}

const getters = {
    getReviews: state => state.reviews,
    getUserReviews: state => state.userReviews,
    getUserReview: state => state.userReview
}

const actions = {

    GET_REVIEW({ commit }, payload) {
        let review = null
        payload.reviews.forEach(r => {
            if (r.user.username == payload.user.username) {
                review = r
            }
        })
        commit('set_user_review', review)
    },

    async GET_MOVIE_REVIEWS({ commit }, movieId) {
        await Axios
        .get(`http://localhost:5000/v1/reviews/movie/${movieId}`)
        .then(response => {
            const reviews = response.data.reviews
            commit('set_reviews', reviews)
        })
        .catch(err => {
            const message = err.response.data.message
            alert(message)
        })
    },

    async GET_USER_REVIEWS({ commit }, token) {
        const headers = { Authorization: `Bearer ${token}` }
        
        await Axios
        .get('http://localhost:5000/v1/reviews/user', { headers })
        .then(response => {
            const reviews = response.data.reviews
            commit('set_user_reviews', reviews)
        })
        .catch(err => {
            const message = err.response.data.message
            alert(message)
        })
    },

    async ADD_REVIEW({ commit }, payload) {
        const body = { 
            movie: payload.movieId,
            rating: payload.rating,
            comment: payload.comment
        }
        const headers = { Authorization: `Bearer ${payload.token}` }

        await Axios
        .post('http://localhost:5000/v1/reviews', body, { headers })
        .then(response => {
            const review = response.data.review
            commit('set_user_review', review)
        })
        .catch(err => {
            const message = err.response.data.message
            alert(message)
        })
    }
}

const mutations = {
    set_reviews: (state, reviews) => state.reviews = reviews,
    set_user_reviews: (state, reviews) => state.userReviews = reviews,
    set_user_review: (state, review) => state.userReview = review
}

export default {
    state,
    getters,
    actions,
    mutations
}