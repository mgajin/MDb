export default function makeMovie(movieData) {
    return Object.freeze({
        title: movieData.Title,
        released: movieData.Released,
        genre: movieData.Genre.split(', '),
        plot: movieData.Plot,
        imdbRating: movieData.imdbRating,
        poster: movieData.Poster,
        production: movieData.Production
    })
}