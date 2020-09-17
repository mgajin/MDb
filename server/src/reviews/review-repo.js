export default function makeReviewRepo({ reviewModel }) {
    return Object.freeze({
        add,
        getByMovie,
        getByUser,
        getAll,
    })

    async function getByMovie(movieId) {
        try {
            const reviews = await reviewModel
                .find({ movie: movieId })
                .populate('user movie', 'username title')

            return reviews
        } catch (err) {
            console.error(err)
            return null
        }
    }

    async function getByUser(userId) {
        try {
            const reviews = await reviewModel
                .find({ user: userId })
                .populate('movie', 'id poster title')

            return reviews
        } catch (err) {
            console.error(err)
            return null
        }
    }

    async function getAll() {
        try {
            const reviews = await reviewModel.find()

            return reviews
        } catch (err) {
            console.error(err)
            return null
        }
    }

    async function add(reviewData) {
        try {
            let review = await reviewModel.findOne({
                movie: reviewData.movie,
                user: reviewData.user,
            })

            if (!review) {
                review = await reviewModel.create(reviewData)
            }

            return review
        } catch (err) {
            console.error(err)
            return null
        }
    }
}
