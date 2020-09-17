import auth from '../auth/auth'
import userRepo from '../users/index'

const protect = async (req, res, next) => {
    try {
        let token = req.headers.authorization
        if (!token) {
            return res
                .status(401)
                .json({ success: false, message: 'Login to access this route' })
        }
        token = token.split(' ')[1]

        const decoded = auth.decoded(token)
        const user = await userRepo.getById(decoded.id)

        if (!user) {
            return res
                .status(404)
                .json({ success: false, message: 'User not found' })
        }

        req.user = user
        next()
    } catch (error) {
        console.log(error)
        return res
            .status(401)
            .json({ success: false, message: 'Login to access this route' })
    }
}

const authorize = async (req, res, next) => {
    const user = req.user

    if (!user) {
        return res
            .status(401)
            .json({ success: false, message: 'Login to access this route' })
    }

    if (!user.isAdmin) {
        return res
            .status(401)
            .json({
                success: false,
                message: 'Not authorized to access this route',
            })
    }

    next()
}

module.exports = {
    protect,
    authorize,
}
