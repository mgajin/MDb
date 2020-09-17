import mongoose from 'mongoose'

const watchlist = {
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
    },
    movies: {
        type: Array({
            type: mongoose.Schema.ObjectId,
            ref: 'Movie',
        }),
        default: [],
    },
}

const watchlistSchema = new mongoose.Schema(watchlist)
const watchlistModel = mongoose.model('Watchlist', watchlistSchema)

export default watchlistModel
