import reviewModel from './review-model'
import makeReviewRepo from './review-repo'
import makeReviewsEndpointHandler from './reviews-endpoint'
import makeReviewRouter from './review-router'
import { Router } from 'express'

const router = Router()

const reviewRepo = makeReviewRepo({ reviewModel })
const reviewsEndpointHandler = makeReviewsEndpointHandler({ reviewRepo })
const reviewRouter = makeReviewRouter({ reviewsEndpointHandler, router })

export default reviewRouter
