require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');

const app = express();

// DB - MongoDB (for listings)
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/trip_vista';
mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=> console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use(session({
  secret: process.env.SESSION_SECRET || 'devsecret',
  resave: false,
  saveUninitialized: false
}));
app.use(flash());

// Middleware to expose flash messages + current path
app.use((req, res, next)=>{
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  res.locals.path = req.path;
  next();
});

// Routes
const indexRoutes = require('./routes/index');
const listingRoutes = require('./routes/listings');
app.use('/', indexRoutes);
app.use('/listings', listingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`Trip Vista running on http://localhost:${PORT}`));
