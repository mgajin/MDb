import { protect, authorize } from '../middlewares/auth'

export default function makeMovieRouter({ moviesEndpointHandler, router }) {
    router.post('/', protect, authorize, moviesEndpointHandler.addMovie)
    router.get('/', moviesEndpointHandler.getMovies)
    router.get('/:movie', moviesEndpointHandler.getMovie)
    router.get(
        '/imdb/:movie',
        protect,
        authorize,
        moviesEndpointHandler.searchImdb
    )

    return router
}
