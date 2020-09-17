const mongoose = require('mongoose')

const review = {
    rating: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
    },
    movie: {
        type: mongoose.Schema.ObjectId,
        ref: 'Movie',
        required: true,
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
    },
    postedAt: {
        type: Date,
        default: Date.now,
    },
}

const reviewSchema = new mongoose.Schema(review)
const reviewModel = mongoose.model('Review', reviewSchema)

module.exports = reviewModel
