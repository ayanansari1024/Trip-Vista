// Simple seed script to add sample listings
require('dotenv').config();
const mongoose = require('mongoose');
const Listing = require('./models/listing');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/trip_vista';
mongoose.connect(MONGO_URI, {useNewUrlParser:true, useUnifiedTopology:true});

const data = [
  { title: 'Cozy city apartment', location: 'Mumbai, India', pricePerNight: 2500, images: ['https://via.placeholder.com/900x500?text=Mumbai+Apartment'], description: 'A central, comfortable apartment.' },
  { title: 'Beachside cottage', location: 'Goa, India', pricePerNight: 4200, images: ['https://via.placeholder.com/900x500?text=Goa+Cottage'], description: 'Relax by the sea.' },
  { title: 'Hilltop cabin', location: 'Shimla, India', pricePerNight: 3500, images: ['https://via.placeholder.com/900x500?text=Shimla+Cabin'], description: 'Peaceful cabin with mountain views.' }
];

async function seed(){
  await Listing.deleteMany({});
  await Listing.insertMany(data);
  console.log('Seeded listings');
  mongoose.disconnect();
}
seed();
