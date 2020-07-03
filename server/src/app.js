const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const { cors } = require('./middlewares/cors')

dotenv.config({ path: './config.config.env' });

const PORT = process.env.PORT || 3000

// database connection

const app = express()

app.use(cors)

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());

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
