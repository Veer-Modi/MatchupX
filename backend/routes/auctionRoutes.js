// Auction routes
const express = require('express');
const router = express.Router();
const auctionController = require('../controllers/auctionController');

// Define auction routes here
router.get('/', auctionController.getAllAuctions);
router.post('/', auctionController.createAuction);

module.exports = router;
