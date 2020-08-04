import auth from './auth'

export default function makeAuthEndpointHanddler({ userRepo, watchlistRepo }) {
    return Object.freeze({
        login,
        register,
        getUser
    })

    async function login(req, res) {
        const { username, password } = req.body

        const user = await userRepo.getByUsername(username)
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' })
        }

        if (!auth.correct(password, user.password)) {
            return res.status(500).json({ success: false, message: 'Wrong password' })
        }

        const token = auth.signToken(user._id)

        res.status(200).json({ success: true, token, user })
    }

    async function register(req, res) {
        const { firstName, lastName, username, password, confirmPassword } = req.body

        if (!auth.matching(password, confirmPassword)) {
            return res.status(500).json({ success: false, message: 'Passwords do not match' })
        }

        let user = await userRepo.getByUsername(username)
        if (user) {
            return res.status(500).json({ success: false, message: 'Username already exists' })
        }

        const userData = { 
            firstName,
            lastName,
            username, 
            password: auth.hashed(password) 
        }

        user = await userRepo.addNew(userData)
        const token = auth.signToken(user._id)

        const watchlist = await watchlistRepo.createWatchlist(user._id)
        if (!watchlist) {
            return res.status(501).json({ success: false, message: 'Failed to create watchlist' })
        }

        res.status(201).json({ success: true, token, user })
    }

    async function getUser(req, res) {
        const user = req.user

        res.status(200).json({ success: true, user })
    }
}