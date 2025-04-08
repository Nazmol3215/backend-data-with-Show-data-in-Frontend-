const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  type: String,         // land, house, worker
  title: String,
  description: String,
  location: String,
  phone: String,
  image: String
}, { timestamps: true });

module.exports = mongoose.model('Listing', listingSchema);
