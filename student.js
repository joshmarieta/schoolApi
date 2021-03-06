const express = require('express');
const mongoose = require('mongoose'); //this configuration will allows to connect to the db.

const bodyParser = require('body-parser');//this allows the data to be dispalyed in JSON format


const studentRoutes = require('./routes/student');

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://joshmarieta:<password>@cluster0.wmeug.mongodb.net/students')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });



//this configuration will allows to connect to the db.

app.use('/api/student', studentRoutes);
//this will be the main route

app.listen(4000);
