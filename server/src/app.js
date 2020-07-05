import express, { json } from 'express';
import { config } from 'dotenv';
const path = require('path');
import morgan from 'morgan';
import colors from 'colors';
import { cors } from './middlewares/cors';
import connectDb from './db';

config({ path: path.join(__dirname, "./config/config.env") });

const PORT = process.env.PORT;

connectDb()

const app = express()

app.use(cors);

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(json());

import movieRouter from './movies/index'
import authRouter from './auth/index'
app.use('/v1/movies', movieRouter)
app.use('/v1/auth', authRouter)

const server = app.listen(
    PORT,
    console.log(
        `Server runing in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    )
);

// // Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    server.close(() => process.exit(1));
});
