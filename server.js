const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const request = require('request');

// Connect to DB and check the connection
// mongoose.connect('mongodb://localhost/weatherDB', { useMongoClient: true }, function () {
//   console.log("DB connection established!!!");
// })

// var Post = require('./models/postModel');

const app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

//PORT
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server up and running on port ${port}...`));
