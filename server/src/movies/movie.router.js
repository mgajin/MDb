import { Router } from 'express';
import { getMovies, getMovie } from './movie.controller';

const router = Router();

// routes
router.get('/', getMovies)
router.get('/:movie', getMovie)

export default router;