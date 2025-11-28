const express = require('express');
const router = express.Router();
const Listing = require('../models/listing');

router.get('/', async (req, res) => {
  // show a few featured listings
  const listings = await Listing.find().limit(6);
  res.render('index', { listings });
});

router.get('/about', (req, res) => {
  res.render('about');
});

module.exports = router;
