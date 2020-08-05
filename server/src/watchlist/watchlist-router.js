import { protect } from '../middlewares/auth'

export default function makeWatchlistRouter({ router, watchlistEndpointHandler }) {
    
    router
        .get('/', protect, watchlistEndpointHandler.getUserWatchlist)
        .put('/insert', protect, watchlistEndpointHandler.addToWatchlist)
        .put('/remove', protect, watchlistEndpointHandler.removeFromWatchlist)

    return router
}