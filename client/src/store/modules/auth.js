import Axios from 'axios'

const state = {
    user: {},
    token: String
}

const getters = {
    getUser: state => state.user
}

const actions = {
    
    async SIGN_IN({ commit }, payload) {
        await Axios
        .post('http://localhost:3000/v1/auth/login', {
            username: payload.username,
            password: payload.password
        })
        .then(response => {
            const user = response.data.user
            commit('set_user', user)
        })
        .catch(err => {
            const status = err.response.status
            const message = err.response.data.message 
            alert(`${status}: ${message}`)
        })
    },

    async SIGN_UP({ commit }, payload) {
        await Axios
        .post('http://localhost:3000/v1/auth/register', {
            firstName: payload.firstName,
            lastName: payload.lastName,
            username: payload.username,
            password: payload.password,
            confirmPassword: payload.confirmPassword
        })
        .then(response => {
            if (response.data.success) {
                const user = response.data.user
                commit('set_user', user)
            }
        })
        .catch(err => {
            const status = err.response.status
            const message = err.response.data.message 
            alert(`${status}: ${message}`)
        })
    }
}

const mutations = {
    set_user: (state, user) => state.user = user
}

export default {
    state,
    getters,
    actions,
    mutations
}