import { protect } from '../middlewares/auth'

export default function makeWatchlistRouter({ router, watchlistEndpointHandler }) {
    
    router.route('/')
        .get(protect, watchlistEndpointHandler.getUserWatchlist)
        .post(protect, watchlistEndpointHandler.addToWatchlist)
        .put(protect, watchlistEndpointHandler.removeFromWatchlist)

    return router
}