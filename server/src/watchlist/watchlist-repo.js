export default function makeWatchlistRepo({ watchlistModel }) {
    return Object.freeze({
        getWatchlist,
        createWatchlist,
        insertMovie,
        removeMovie
    })

    async function getWatchlist(userId) {
        try {
            const watchlist = await watchlistModel
                .findOne({ user: userId })
                .populate('movies user', 'title poster username')
            
            return watchlist
        } catch(err) {
            console.log(err)
            return null
        }
    }

    async function createWatchlist(userId) {
        try {
            const watchlist = await watchlistModel.create({ user: userId })

            return watchlist
        } catch(err) {
            console.log(err)
            return null
        }
    }

    async function insertMovie(userId, movieId) {
        try {
            const watchlist = await watchlistModel.findOne({ user: userId })
            const { movies } = watchlist 

            if (watchlist && !movies.includes(movieId)) {
                movies.push(movieId)
                watchlist.save()
            }

            return watchlist.populate('movies', 'title')
        } catch (err) {
            console.log(err)
            return null
        }
    }

    async function removeMovie(userId, movieId) {
        try {
            const watchlist = await watchlistModel.findOne({ user: userId })
            const { movies } = watchlist

            movies.forEach(movie => {
                if (movie._id == movieId) {
                    movies.splice(movies.indexOf(movie), 1)
                    watchlist.save()
                }
            })
    
            return watchlist.populate('movies', 'title')
        } catch (err) {
            console.log(err)
            return null
        }
    }
}