import Axios from 'axios'

const state = {
    movies: [],
    imdbMovies: [],
    movie: {}
}

const getters = {
    getMovies: state => state.movies,
    getImdbMovies: state => state.imdbMovies,
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
    },

    async SEARCH_IMDB({ commit }, payload) {
        const headers = { Authorization: `Bearer ${payload.token}` }

        await Axios
        .get(`http://localhost:3000/v1/movies/imdb/${payload.movie}`, {
            headers
        })
        .then(response => {
            const movies = response.data.movies
            commit('set_imdb_movies', movies)
        })
        .catch(err => {
            const message = err.response.data.message
            alert(message)
        })
    },
    
    async ADD_MOVIE({ commit }, payload) {
        const body = { imdbId: payload.id }
        const headers = { Authorization: `Bearer ${payload.token}` }

        await Axios
        .post('http://localhost:3000/v1/movies', body, {
            headers
        })
        .then(response => {
            const movies = response.data.movies
            commit('set_imdb_movies', movies)
        })
        .catch(err => {
            const message = err.response.data.message
            alert(message)
        })
    }
}

const mutations = {
    set_movies: (state, movies) => state.movies = movies,
    set_imdb_movies: (state, movies) => state.imdbMovies = movies,
    set_movie: (state, movie) => state.movie = movie
}

export default {
    state,
    getters,
    actions,
    mutations
}