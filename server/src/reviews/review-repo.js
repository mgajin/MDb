export default function makeReviewRepo({ reviewModel }) {
    return Object.freeze({
        add,
        getByMovie,
        getByUser,
        getAll
    })

    async function getByMovie(movieId) {
        const reviews = await reviewModel
            .find({ movie: movieId })
            .populate('user movie', 'username title')

        return reviews
    }

    async function getByUser(userId) {
        const reviews = await reviewModel
            .find({ user: userId })
            .populate('movie', 'id poster title')

        return reviews
    }

    async function getAll() {
        return await reviewModel.find()
    }

    async function add(reviewData) {
        let review = await reviewModel.findOne({
            movie: reviewData.movieId,
            user: reviewData.userId
        })
        
        if (!review) {
            review = await reviewModel.create(reviewData)
        }

        return review
    }
}