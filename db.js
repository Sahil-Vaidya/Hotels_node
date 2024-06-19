const mongoose = require('mongoose');
require('dotenv').config();

// define the mongodb connection url
// const mongoURL = 'mongodb://localhost:27017/hotel';
const mongoURL = process.env.MONGODB_URL;

// mongoose.connect(mongoURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   });

mongoose.connect(mongoURL);

// get the default connection
const db = mongoose.connection;

// define event listener for db connection

db.on('connected', () => {
    console.log('connected to mongodb server');
});

db.on('error', (err) => {
    console.log('mongodb connection error:', err);
});

db.on('disconnected', () => {
    console.log('mongodb disconnected');
});

// Export the database connection
module.exports = db;
