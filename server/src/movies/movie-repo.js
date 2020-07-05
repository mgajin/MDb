export default function makeMovieRepo({ movieModel }) {
    return Object.freeze({
        add,
        getAll,
        getByTitle,
        getByGenre
    })

    async function getAll() {
        const movies = await movieModel.find()

        return movies
    }

    async function getByTitle(title) {

        const movies = await movieModel.find()
        let filtered = null

        if (movies) {
            filtered = movies.filter(movie => {
                movie.title.includes(title)
            })
        }

        return filtered
    }

    async function getByGenre(genre) {

        const movies = await movieModel.find()
        let filtered = null

        if (movies) {
            filtered = movies.filter(movie => {
                movie.genre.includes(genre)
            })
        }

        return filtered
    }

    async function add() {}
}
