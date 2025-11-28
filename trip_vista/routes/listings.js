const express = require('express');
const router = express.Router();
const Listing = require('../models/listing');

// Index - show all
router.get('/', async (req, res) => {
  const query = {};
  if (req.query.location) {
    query.location = new RegExp(req.query.location, 'i');
  }
  const listings = await Listing.find(query);
  res.render('listings/index', { listings, search: req.query.location || '' });
});

// New - form
router.get('/new', (req, res) => {
  res.render('listings/new');
});

// Create
router.post('/', async (req, res) => {
  const data = {
    title: req.body.title,
    location: req.body.location,
    pricePerNight: Number(req.body.pricePerNight) || 0,
    description: req.body.description,
    images: req.body.images ? req.body.images.split(',').map(s => s.trim()) : []
  };
  try {
    const listing = new Listing(data);
    await listing.save();
    req.flash('success', 'Listing created');
    res.redirect(`/listings/${listing._id}`);
  } catch (e) {
    req.flash('error', 'Failed to create listing');
    res.redirect('/listings/new');
  }
});

// Show
router.get('/:id', async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    req.flash('error', 'Listing not found');
    return res.redirect('/listings');
  }
  res.render('listings/show', { listing });
});

module.exports = router;
