const express = require('express');
const mongoose = require('mongoose');
const Project = require('./models/project');
const Issue = require('./models/issue');
const db=require('./conifg/mongoose')
const app = express();

// Configure the app
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./views'));

//for using delete method
const methodOverride = require('method-override');
app.use(methodOverride('_method'));


// Define routes
app.use('/', require('./routes/route'));


// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
