// Scoreboard routes
const express = require('express');
const router = express.Router();
const scoreboardController = require('../controllers/scoreboardController');

// Define scoreboard routes here
router.get('/', scoreboardController.getScoreboard);

module.exports = router;
