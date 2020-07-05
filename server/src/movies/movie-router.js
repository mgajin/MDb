export default function makeMovieRouter({ moviesEndpointHandler, router }) {
    router.post('/', moviesEndpointHandler.addMovie)
    router.get('/', moviesEndpointHandler.getMovies)
    router.get('/:movie', moviesEndpointHandler.getMovie)
    router.get('/imdb/:movie', moviesEndpointHandler.searchImdb)
    
    return router
}
