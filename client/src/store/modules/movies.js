import Axios from 'axios'

const store = {
    movies: []
}

const getters = {
    getMovies: store => store.movies
}

const actions = {

    async GET_MOVIES({ commit }) {
        await Axios
        .get('http://localhost:3000/v1/movies')
        .then(response => {
            if (response.data.success) {
                let movies = response.data.movies
                commit('set_movies', movies)
            }
        })
        .catch(err => {
            alert(err.message)
        })
    }
}

const mutations = {
    set_movies: (store, movies) => store.movies = movies
}

export default {
    store,
    getters,
    actions,
    mutations
}