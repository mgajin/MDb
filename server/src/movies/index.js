import movieModel from './movie-model'
import makeMovieRepo from './movie-repo'
import makeMoviesEndpointHandler from './movies-endpoint'
import makeMovieRouter from './movie-router'
import imdbApi from '../imdb/index'

const movieRepo = makeMovieRepo({ movieModel })
const moviesEndpointHandler = makeMoviesEndpointHandler({ movieRepo, imdbApi })
const movieRouter = makeMovieRouter({ moviesEndpointHandler })

export default movieRouter
