export default function makeMovieRepo({ movieModel }) {
    return Object.freeze({
        add,
        getAll,
        getByTitle,
        getByGenre
    })

    async function add(movieData) {

        let movie = await movieModel.findOne({ title: movieData.title })

        if (!movie) {
            movie = await movieModel.create(movieData)
        }

        return movie
    }

    async function getAll() {
        const movies = await movieModel.find()

        return movies
    }

    async function getByTitle(title) {
        const movies = await movieModel.find()
        
        const filtered = movies.filter(movie => {
            return movie.title.includes(title)
        })
    
        return filtered
    }

    async function getByGenre(genre) {
        const movies = await movieModel.find()
        
        const filtered = movies.filter(movie => {
            return movie.genre.includes(genre)
        })
    
        return filtered
    }
}
