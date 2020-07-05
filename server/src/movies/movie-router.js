import { Router } from 'express';

export default function makeMovieRouter({ moviesEndpointHandler }) {
    const router = Router();

    router.get('/', moviesEndpointHandler.getMovies)
    router.get('/:movie', moviesEndpointHandler.getMovie)
    router.get('/imdb/:movie', moviesEndpointHandler.searchImdb)
    
    return router
}
