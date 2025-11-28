const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  pricePerNight: { type: Number, required: true },
  description: { type: String },
  images: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Listing', ListingSchema);
