import Axios from 'axios'

const state = {
    watchlist: {}
}

const getters = {
    getWatchlist: state => state.watchlist
}

const actions = {

    async GET_WATCHLIST({ commit }, token) {
        const headers = { Authorization: `Bearer ${token}` }

        await Axios.get('http://localhost:5000/v1/watchlist', { headers })
            .then(response => {
                const watchlist = response.data.watchlist
                commit('set_watchlist', watchlist)
            })
            .catch(err => {
                const message = err.response.data.message
                alert(message)
            })
    },

    async INSERT_MOVIE({ commit }, payload) {
        const headers = { Authorization: `Bearer ${payload.token}` }
        const body = { movieId: payload.movieId }

        await Axios.put('http://localhost:5000/v1/watchlist/insert', body, { headers })
            .then(response => {
                const watchlist = response.data.watchlist
                commit('set_watchlist', watchlist)
            })
            .catch(err => {
                const message = err.response.data.message
                alert(message)
            })
    },

    async REMOVE_MOVIE({ commit }, payload) {
        const headers = { Authorization: `Bearer ${payload.token}` }
        const body = { movieId: payload.movieId }

        await Axios.put('http://localhost:5000/v1/watchlist/remove', body, { headers })
            .then(response => {
                const watchlist = response.data.watchlist
                commit('set_watchlist', watchlist)
            })
            .catch(err => {
                const message = err.response.data.message
                alert(message)
            })
    }
}

const mutations = {
    set_watchlist: (state, watchlist) => state.watchlist = watchlist
}

export default {
    state,
    getters,
    actions,
    mutations
}