export default function makeMovieRepo({ movieModel }) {
    return Object.freeze({
        add,
        getAll,
        getById,
        getByTitle,
        getByGenre,
    })

    async function add(movieData) {
        try {
            let movie = await movieModel.findOne({ title: movieData.title })

            if (!movie) {
                movie = await movieModel.create(movieData)
            }

            return movie
        } catch (err) {
            console.error(err)
            return null
        }
    }

    async function getAll() {
        try {
            const movies = await movieModel.find()

            return movies
        } catch (err) {
            console.error(err)
            return null
        }
    }

    async function getById(id) {
        try {
            const movie = await movieModel.findById(id)

            return movie
        } catch (err) {
            console.error(err)
            return null
        }
    }

    async function getByTitle(title) {
        try {
            const movies = await movieModel.find()

            const filtered = movies.filter((movie) => {
                return movie.title.includes(title)
            })

            return filtered
        } catch (err) {
            console.error(err)
            return null
        }
    }

    async function getByGenre(genre) {
        try {
            const movies = await movieModel.find()

            const filtered = movies.filter((movie) => {
                return movie.genre.includes(genre)
            })

            return filtered
        } catch (err) {
            console.error(err)
            return null
        }
    }
}
