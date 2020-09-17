import { protect } from '../middlewares/auth'

export default function makeAuthRouter({ router, authEndpointHandler }) {
    router.post('/login', authEndpointHandler.login)
    router.post('/register', authEndpointHandler.register)
    router.get('/user', protect, authEndpointHandler.getUser)

    return router
}
