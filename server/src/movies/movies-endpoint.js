import makeMovie from './movie'

export default function makeMoviesEndpointHandler({ movieRepo, imdbApi }) {
    return Object.freeze({
        getMovies,
        getMovie,
        addMovie,
        searchImdb
    })

    async function getMovies(req, res) {
        let movies

        if (req.query.genre) {
            movies = await movieRepo.getByGenre(req.query.genre)
        } else if (req.query.title) {
            movies = await movieRepo.getByTitle(req.query.title)
        } else {
            movies = await movieRepo.getAll()
        }

        if (!movies) {
            return res.status(404).json({ success: false, message: 'Not found' })
        }

        res.status(200).json({ success: true, movies })
    }

    async function getMovie(req, res) {

        const search = req.params.movie;
        const movie = await fetchMovie(search);

        if (!movie) {
            return res.status(404).send('Movie not found')
        }

        res.status(200).json({ success: true, movie })
    }

    async function addMovie(req, res) {
        const imdbId = req.body.imdbId
        const movieData = await imdbApi.fetchMovie(imdbId)

        if (!movieData) {
            return res.status(404).send('Movie not found')
        }

        const movie = makeMovie(movieData)
        const createdMovie = await movieRepo.add(movie)

        res.status(201).json({ success: true, movie: createdMovie })
    }

    async function searchImdb(req, res) {
        const search = req.params.movie
        const movies = await imdbApi.searchMovie(search)

        if (!movies) {
            return res.status(404).send('Not found')
        }

        res.status(200).json({ success: true, movies })
    }
}
