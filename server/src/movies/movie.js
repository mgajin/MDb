const axios = require('axios');

module.exports = {
    fetchMovie
}

async function fetchMovie(search) {
    const id = await getMovieId(search);
    
    const response = await axios
    .get(`https://${process.env.API_URL}`, {
        headers: {
            'content-type': 'application/octet-stream',
            'x-rapidapi-host': `${process.env.API_URL}`,
            'x-rapidapi-key': `${process.env.API_KEY}`
        },
        params: {
            i: id,
            r: 'json'
        }
    })
    .catch(error => {
        console.log(error);
    });

    const imdb = response.data;
    const movie = {
        title: imdb.Title,
        released: imdb.Released,
        genre: imdb.Genre.split(', '),
        plot: imdb.Plot,
        imdbRating: imdb.imdbRating,
        poster: imdb.Poster,
        production: imdb.Production
    };
    
    return movie;
}


async function getMovieId(movie) {
    const response = await axios.get(`https://${process.env.API_URL}`, {
            headers: {
                'content-type': 'application/octet-stream',
                'x-rapidapi-host': `${process.env.API_URL}`,
                'x-rapidapi-key': `${process.env.API_KEY}`
            },
            params: {
                r: 'json',
                s: movie
            }
        })
        .catch(error => {
            console.log(error);
        });

    const id = response.data.Search[0].imdbID;
    
    return id;
}
