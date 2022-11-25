const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectionDB = require('./database/connection');

//connecting MongoDB
connectionDB();

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose connection is disconnected...')
})

//printing the process id 
const server = app.listen(process.env.PORT || 3000, () => {
    console.log(process.pid);
    console.log(`on process id: ${process.pid}`);
});