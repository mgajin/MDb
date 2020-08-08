import Axios from 'axios'
const URL = 'http://localhost:5000/v1/movies'

const state = {
    movies: [],
    imdbMovies: [],
    movie: {},
    genres: [
        'Action', 
        'Sci-Fi', 
        'Comedy', 
        'Thriller', 
        'Crime', 
        'Drama', 
        'Mystery', 
        'Horror', 
        'Adventure', 
        'Fantasy', 
        'Western'
    ]
}

const getters = {
    getMovies: state => state.movies,
    getImdbMovies: state => state.imdbMovies,
    getMovie: state => state.movie,
    getGenres: state => state.genres
}

const actions = {

    async GET_MOVIES({ commit }) {
        await Axios
            .get(URL)
            .then(response => {
                const { movies } = response.data
                commit('set_movies', movies)
            })
            .catch(err => {
                const { message } = err.response.data
                alert(message)
            })
    },

    async FILTER_MOVIES({ commit }, genre) {
        await Axios
            .get(`${URL}?genre=${genre}`)
            .then(response => {
                const { movies } = response.data
                commit('set_movies', movies)
            })
            .catch(err => {
                const { message } = err.response.data
                alert(message)
            })
    },

    async SEARCH_MOVIES({ commit }, title) {
        await Axios
            .get(`${URL}?title=${title}`)
            .then(response => {
                const { movies } = response.data
                commit('set_movies', movies)
            })
            .catch(err => {
                const { message } = err.response.data
                alert(message)
            })
    },

    async GET_MOVIE({ commit }, id) {
        await Axios
            .get(`${URL}/${id}`)
            .then(response => {
                const { movie } = response.data
                commit('set_movie', movie)
            })
            .catch(err => {
                const { message } = err.response.data
                alert(message)
            })
    },

    async SEARCH_IMDB({ commit }, payload) {
        const headers = { Authorization: `Bearer ${payload.token}` }

        await Axios
            .get(`${URL}/imdb/${payload.movie}`, { headers })
            .then(response => {
                const { movies } = response.data
                commit('set_imdb_movies', movies)
            })
            .catch(err => {
                const { message } = err.response.data
                alert(message)
            })
    },
    
    async ADD_MOVIE({ commit }, payload) {
        const body = { imdbId: payload.id }
        const headers = { Authorization: `Bearer ${payload.token}` }

        await Axios
            .post(URL, body, { headers })
            .then(response => {
                const { movies } = response.data
                commit('set_imdb_movies', movies)
            })
            .catch(err => {
                const { message } = err.response.data
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