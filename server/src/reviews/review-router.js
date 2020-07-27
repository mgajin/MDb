import { protect } from '../middlewares/auth'

export default function makeReviewRouter({ reviewsEndpointHandler, router }) {

    router.get('/movie/:movieId', reviewsEndpointHandler.getMovieReviews)
    router.get('/user', protect, reviewsEndpointHandler.getUserReviews)
    router.post('/', protect, reviewsEndpointHandler.addReview)
    router.get('/', reviewsEndpointHandler.getAllReviews)

    return router
}