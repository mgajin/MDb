import movieModel from './movie-model'
import makeMovieRepo from './movie-repo'
import makeMoviesEndpointHandler from './movies-endpoint'
import makeMovieRouter from './movie-router'

const movieRepo = makeMovieRepo({ movieModel })
const moviesEndpointHandler = makeMoviesEndpointHandler({ movieRepo })
const movieRouter = makeMovieRouter({ moviesEndpointHandler })

export default movieRouter
