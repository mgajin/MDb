import auth from './auth'

export default function makeAuthEndpointHanddler({ userRepo }) {
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
        const { username, email, password, password2 } = req.body

        if (!auth.matching(password, password2)) {
            return res.status(500).json({ success: false, message: 'Passwords do not match' })
        }

        let user = await userRepo.getByUsername(username)
        if (user) {
            return res.status(500).json({ success: false, message: 'Username already exists' })
        }

        user = await userRepo.getByEmail(email)
        if (user) {
            return res.status(500).json({ success: false, message: 'Email already exists' })
        }

        const userData = { 
            username,
            email, 
            password: auth.hashed(password) 
        }

        user = await userRepo.addNew(userData)
        const token = auth.signToken(user._id)

        res.status(201).json({ success: true, token, user })
    }

    async function getUser(req, res) {
        const user = req.user

        res.status(200).json({ success: true, user })
    }

}