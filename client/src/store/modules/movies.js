import Axios from 'axios';

const state = {
    movies: {},
    genres: [
        'All',
        'Action',
        'Sci-Fi',
        'Adventure',
        'Drama',
        'Thriller',
        'Romance',
        'Comedy'
    ],
    movie: {}
}

const getters = {
    getMovies: state => state.movies,
    getMovie: state => state.movie,
    getGenres: state => state.genres
}

const actions = {

    async GET_MOVIES({ commit }) {
        await Axios.get('http://localhost:3000/v1/movies')
            .then(response => {
                if (response.data.success) {
                    commit('load_movies', response.data.movies)
                } else {
                    alert(response.data.message)
                }
            })
            .catch(err => {
                alert(err.message)
            })
    }
}

const mutations = {
    load_movies: (state, movies) => state.movies = movies
}

export default {
    state,
    getters,
    actions,
    mutations
}
