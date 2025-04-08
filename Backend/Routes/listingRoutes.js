const express = require('express');
const router = express.Router();
const { addListing, getListings } = require('../Controllers/listingController');

router.post('/', addListing);
router.get('/', getListings);

module.exports = router;
