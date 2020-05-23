var express = require('express');
// var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var passport = require("passport");

// Bring in the database object
var config = require("./config/database");

var indexRouter = require('./routes/index');

var app = express();

mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Database connected successfully " + config.database))
.catch(err => console.log(err));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// To enable cors
app.use(cors({ 
    origin: "http://localhost:4200",
    credentials: true
}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);

module.exports = app;