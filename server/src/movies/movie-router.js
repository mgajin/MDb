import { Router } from 'express';

export default function makeMovieRouter({ moviesEndpointHandler }) {
    const router = Router();

    router.get('/', moviesEndpointHandler.getMovies)
    router.get('/:movie', moviesEndpointHandler.getMovie)
    
    return router
}
