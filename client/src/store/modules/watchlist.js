import Axios from 'axios'
const URL = 'http://localhost:5000/v1/watchlist'

const state = {
    watchlist: {},
}

const getters = {
    getWatchlist: (state) => state.watchlist,
}

const actions = {
    async GET_WATCHLIST({ commit }, token) {
        const headers = { Authorization: `Bearer ${token}` }

        await Axios.get(URL, { headers })
            .then((response) => {
                const { watchlist } = response.data
                commit('set_watchlist', watchlist)
            })
            .catch((err) => {
                const { message } = err.response.data
                alert(message)
            })
    },

    async INSERT_MOVIE({ commit }, payload) {
        const headers = { Authorization: `Bearer ${payload.token}` }
        const body = { movieId: payload.movieId }

        await Axios.put(`${URL}/insert`, body, { headers })
            .then((response) => {
                const { watchlist } = response.data
                commit('set_watchlist', watchlist)
            })
            .catch((err) => {
                const { message } = err.response.data
                alert(message)
            })
    },

    async REMOVE_MOVIE({ commit }, payload) {
        const headers = { Authorization: `Bearer ${payload.token}` }
        const body = { movieId: payload.movieId }

        await Axios.put(`${URL}/remove`, body, { headers })
            .then((response) => {
                const { watchlist } = response.data
                commit('set_watchlist', watchlist)
            })
            .catch((err) => {
                const { message } = err.response.data
                alert(message)
            })
    },
}

const mutations = {
    set_watchlist: (state, watchlist) => (state.watchlist = watchlist),
}

export default {
    state,
    getters,
    actions,
    mutations,
}
