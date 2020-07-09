import Axios from 'axios'

const state = {
    movies: [],
    movie: {}
}

const getters = {
    getMovies: state => state.movies,
    getMovie: state => state.movie
}

const actions = {

    async GET_MOVIES({ commit }) {
        await Axios
        .get('http://localhost:3000/v1/movies')
        .then(response => {
            if (response.data.success) {
                const movies = response.data.movies
                commit('set_movies', movies)
            }
        })
        .catch(err => {
            alert(err.message)
        })
    },

    async GET_MOVIE({ commit }, id) {
        await Axios
        .get(`http://localhost:3000/v1/movies/${id}`)
        .then(response => {
            if (response.data.success) {
                const movie = response.data.movie
                commit('set_movie', movie)
            }
        })
        .catch(err => {
            alert(err.message)
        })
    }
}

const mutations = {
    set_movies: (state, movies) => state.movies = movies,
    set_movie: (state, movie) => state.movie = movie
}

export default {
    state,
    getters,
    actions,
    mutations
}