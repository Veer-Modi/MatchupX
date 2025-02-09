// Match routes
const express = require('express');
const router = express.Router();
const matchController = require('../controllers/matchController');

// Define match routes here
router.get('/', matchController.getAllMatches);
router.post('/', matchController.createMatch);

module.exports = router;
