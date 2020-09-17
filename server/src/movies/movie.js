const mapImdbMovies = (movies) => {
    return movies.map((movie) => mapMovie(movie))
}

const mapMovie = (movie) => {
    return Object.freeze({
        title: movie.Title,
        imdbId: movie.imdbID,
        poster: movie.Poster,
    })
}

const makeMovie = (movieData) => {
    return Object.freeze({
        title: movieData.Title,
        released: movieData.Released,
        genre: movieData.Genre.split(', '),
        plot: movieData.Plot,
        imdbRating: movieData.imdbRating,
        poster: movieData.Poster,
        production: movieData.Production,
    })
}

module.exports = {
    mapImdbMovies,
    makeMovie,
}
