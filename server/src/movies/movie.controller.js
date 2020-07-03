import { fetchMovie } from './movie'

// @desc    Get movies
// @route   GET /movies
const getMovies = async (req, res) => {}

// @desc    Get movie from database
// @route   GET /movies/:movie
const getMovie = async (req, res) => {

    const search = req.params.movie;
    const movie = await fetchMovie(search);

    if (!movie) {
        return res.status(404).send('Movie not found')
    }

    res.status(200).json({ success: true, movie })
}

module.exports = {
    getMovies,
    getMovie
}