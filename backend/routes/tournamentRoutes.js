// Tournament routes
const express = require('express');
const router = express.Router();
const tournamentController = require('../controllers/tournamentController');

// Define tournament routes here
router.get('/', tournamentController.getAllTournaments);
router.post('/', tournamentController.createTournament);

module.exports = router;
