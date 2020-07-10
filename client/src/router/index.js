import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Movies from '../views/Movies'
import Movie from '../views/Movie'
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/movies',
    name: 'movies',
    component: Movies
  },
  {
    path: '/movies/:id',
    name: 'movie',
    props: true,
    component: Movie
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
