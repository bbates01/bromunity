// import environment variables
require('dotenv').config();

// import express libraries and filestructure traversal
const express = require('express');
const session = require('express-session');

// middleware
const {authMiddleware} = require('./middleware/auth.middleware');

// routes

// app
const app = express();

// import public directory
app.use(express.static('public'));

// view engine setup
app.set('view engine', 'ejs');

// parse form data
app.use(express.urlencoded({extended: true}));
// parse JSON data
app.use(express.json());
// session configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'fallback-secret-key',
    resave: false,
    saveUninitialized: false,
  })
);

app.use(express.urlencoded({extended:true}));

// session-protection middleware
app.use(authMiddleware);