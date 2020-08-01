import Vue from 'vue'
import Vuex from 'vuex'
import movies from './modules/movies'
import reviews from './modules/reviews'
import auth from './modules/auth'
import utils from './modules/utils'

Vue.use(Vuex)
 
export default new Vuex.Store({
  modules: {
    movies,
    reviews,
    auth,
    utils
  }
})