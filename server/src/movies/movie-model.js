const mongoose = require('mongoose');

const MovieModel = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    released: {
        type: String,
        required: true
    },
    genre: {
        type: Array,
        required: true
    },
    plot: {
        type: String,
        required: true
    },
    imdbRating: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    poster: {
        type: String,
        required: true
    },
    production: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Movie', MovieModel);
