// Main server file
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const tournamentRoutes = require('./routes/tournamentRoutes');
const auctionRoutes = require('./routes/auctionRoutes');
const matchRoutes = require('./routes/matchRoutes');
const scoreboardRoutes = require('./routes/scoreboardRoutes');
const setupSocket = require('./utils/socket');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/tournaments', tournamentRoutes);
app.use('/api/auctions', auctionRoutes);
app.use('/api/matches', matchRoutes);
app.use('/api/scoreboard', scoreboardRoutes);

const server = app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
});

setupSocket(server);
