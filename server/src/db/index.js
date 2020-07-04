import mongoose from 'mongoose'

export default async function connectDb() {

    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold)
} 