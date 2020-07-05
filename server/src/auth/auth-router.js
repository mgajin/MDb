export default function makeAuthRouter({ router, authEndpointHandler }) {
    router.post('/login', authEndpointHandler.login)
    router.post('/register', authEndpointHandler.register)

    return router
}