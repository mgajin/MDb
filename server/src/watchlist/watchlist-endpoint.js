export default function makeWatchlistEndpointHandler({ watchlistRepo }) {
    return Object.freeze({
        getUserWatchlist,
        addToWatchlist,
        removeFromWatchlist
    })

    async function getUserWatchlist(req, res) {
        const user = req.user

        const watchlist = await watchlistRepo.getWatchlist(user.id)

        if (!watchlist) {
            return res.status(404).json({ sucess: false, message: 'Watchlist not found' })
        }

        return res.status(200).json({ success: true, watchlist })
    }

    async function addToWatchlist(req, res) {
        const { movieId } = req.body
        const user = req.user
        
        const watchlist = await watchlistRepo.insertMovie(user.id, movieId)

        if (!watchlist) {
            return res.status(501).json({ success: false, message: 'Failed to insert movie into watchlist' })
        }

        return res.status(200).json({ success: true, watchlist })
    }

    async function removeFromWatchlist(req, res) {
        const { movieId } = req.body
        const user = req.user
        
        const watchlist = await watchlistRepo.removeMovie(user.id, movieId)

        if (!watchlist) {
            return res.status(501).json({ success: false, message: 'Failed to remove movie from watchlist' })
        }

        return res.status(200).json({ success: true, watchlist })
    }
}