import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'Name is required'],
    },
    lastName: {
        type: String,
        required: [true, 'Surname is required'],
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        minlength: 5,
        unique: true,
    },
    password: {
        type: String,
        reuiqred: [true, 'Password is required'],
        minlength: 4,
        select: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
})

export default model('User', UserSchema)
