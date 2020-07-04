import { fetchMovie } from './movie'

export default function makeMoviesEndpointHandler({ movieRepo }) {
    return Object.freeze({
        getMovies,
        getMovie
    })

    // @route   GET /movies
    async function getMovies(req, res) {}

    // @route   GET /movies/:movie
    async function getMovie(req, res) {

        const search = req.params.movie;
        const movie = await fetchMovie(search);

        if (!movie) {
            return res.status(404).send('Movie not found')
        }

        res.status(200).json({ success: true, movie })
    }
}
