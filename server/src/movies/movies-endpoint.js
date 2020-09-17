import { makeMovie, mapImdbMovies } from './movie'

export default function makeMoviesEndpointHandler({ movieRepo, imdbApi }) {
    return Object.freeze({
        getMovies,
        getMovie,
        addMovie,
        searchImdb,
    })

    async function getMovies(req, res) {
        const { query } = req
        let movies

        if (query.genre) {
            movies = await movieRepo.getByGenre(query.genre)
        } else if (query.title) {
            movies = await movieRepo.getByTitle(query.title)
        } else {
            movies = await movieRepo.getAll()
        }

        if (!movies) {
            return res
                .status(404)
                .json({ success: false, message: 'Not found' })
        }

        res.status(200).json({ success: true, movies })
    }

    async function getMovie(req, res) {
        const id = req.params.movie
        const movie = await movieRepo.getById(id)

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
        const imdbMovies = await imdbApi.searchMovie(search)

        if (!imdbMovies) {
            return res
                .status(404)
                .json({ success: false, message: 'Not found' })
        }

        const movies = mapImdbMovies(imdbMovies)

        res.status(200).json({ success: true, movies })
    }
}
