import userRepo from '../users/index'
import { watchlistRepo } from '../watchlist/index'
import makeAuthEndpointHandler from './auth-endpoint'
import makeAuthRouter from './auth-router'
import { Router } from 'express'

const router = Router()

const authEndpointHandler = makeAuthEndpointHandler({ userRepo, watchlistRepo })
const authRouter = makeAuthRouter({ router, authEndpointHandler })

export default authRouter