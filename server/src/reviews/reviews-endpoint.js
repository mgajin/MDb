export default function makeReviewsEndpointHandler({ reviewRepo }) {
    return Object.freeze({
        getMovieReviews,
        getUserReviews,
        getAllReviews,
        addReview,
    })

    async function getMovieReviews(req, res) {
        const { id } = req.params

        if (!id) {
            return res
                .status(401)
                .json({ success: false, message: 'ID required' })
        }

        const reviews = await reviewRepo.getByMovie(id)

        return res.status(200).json({ success: true, reviews })
    }

    async function getUserReviews(req, res) {
        const user = req.user

        const reviews = await reviewRepo.getByUser(user.id)

        return res.status(200).json({ success: true, reviews })
    }

    async function getAllReviews(req, res) {
        const reviews = await reviewRepo.getAll()

        return res.status(200).json({ success: true, reviews })
    }

    async function addReview(req, res) {
        const { rating, comment, movie } = req.body
        const user = req.user

        const reviewData = {
            rating,
            comment,
            movie,
            user,
        }

        const review = await reviewRepo.add(reviewData)

        if (!review) {
            return res
                .status(401)
                .json({ success: false, message: 'Error while adding review' })
        }

        return res.status(201).json({ success: true, review })
    }
}
