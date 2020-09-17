import watchlistModel from './watchlist-model'
import makeWatchlistRepo from './watchlist-repo'
import makeWatchlistEndpointHandler from './watchlist-endpoint'
import { Router } from 'express'
import makeWatchlistRouter from './watchlist-router'

const router = Router()

const watchlistRepo = makeWatchlistRepo({ watchlistModel })
const watchlistEndpointHandler = makeWatchlistEndpointHandler({ watchlistRepo })
const watchlistRouter = makeWatchlistRouter({
    router,
    watchlistEndpointHandler,
})

module.exports = {
    watchlistRouter,
    watchlistRepo,
}
