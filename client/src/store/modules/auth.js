import Axios from 'axios'

const state = {
    user: null,
    token: window.localStorage.getItem('token'),
    loading: false,
    error: null
}

const getters = {
    getUser: state => state.user,
    getToken: state => state.token,
    getLoading: state => state.loading,
    getError: state => state.error
}

const actions = {
    
    async SIGN_IN({ commit }, payload) {
        commit('set_loading', true)
        commit('clear_error')

        await Axios
        .post('http://localhost:3000/v1/auth/login', {
            username: payload.username,
            password: payload.password
        })
        .then(response => {
            commit('set_loading', false)
            const { user, token } = response.data
            commit('set_user', user)
            commit('set_token', token)
        })
        .catch(err => {
            commit('set_loading', false)
            const message = err.response.data.message
            commit('set_error', message)
        })
    },

    async SIGN_UP({ commit }, payload) {
        commit('set_loading', true)
        commit('clear_error')

        await Axios
        .post('http://localhost:3000/v1/auth/register', {
            firstName: payload.firstName,
            lastName: payload.lastName,
            username: payload.username,
            password: payload.password,
            confirmPassword: payload.confirmPassword
        })
        .then(response => {
            commit('set_loading', false)
            const { user, token } = response.data
            commit('set_user', user)
            commit('set_token', token)
        })
        .catch(err => {
            commit('set_loading', false)
            const message = err.response.data.message
            commit('set_error', message) 
        })
    }
}

const mutations = {
    set_user: (state, payload) => state.user = payload,
    set_token: (state, token) => {
        state.token = token
        localStorage.setItem('token', token)
    },
    clear_token: (state) => {
        state.token = null
        localStorage.clear()
    },
    set_loading: (state, payload) => state.loading = payload,
    set_error: (state, payload) => state.error = payload,
    clear_error: (state) => state.error = null
}

export default {
    state,
    getters,
    actions,
    mutations
}