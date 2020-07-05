import userRepo from '../users/index'
import makeAuthEndpointHandler from './auth-endpoint'
import makeAuthRouter from './auth-router'
import { Router } from 'express'

const router = Router()

const authEndpointHandler = makeAuthEndpointHandler({ userRepo })
const authRouter = makeAuthRouter({ router, authEndpointHandler })

export default authRouter