import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const matching = (password1, password2) => {
    return password1 == password2
}

const hashed = (password) => {
    return bcrypt.hashSync(password, 8)
}

const correct = (password, hashed) => {
    return bcrypt.compareSync(password, hashed)
}

const signToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: 86400 })
}

module.exports = {
    matching,
    hashed,
    correct,
    signToken
}