# Tournament Management System

This is the backend for the Tournament Management System, built with Node.js and Express. It provides APIs for managing tournaments, teams, players, and auctions.

## Features

- User authentication
- Tournament management
- Team management
- Player management
- Auction management
- Real-time updates using Socket.io

## Installation

1. Clone the repository.
2. Navigate to the `backend` directory.
3. Run `npm install` to install dependencies.
4. Create a `.env` file with your MongoDB connection string and JWT secret.
5. Start the server with `npm start` or in development mode with `npm run dev`.

## API Endpoints

- `/api/auth/login`: Login a user
- `/api/auth/register`: Register a new user
- `/api/tournaments`: Get all tournaments or create a new tournament
- `/api/auctions`: Get all auctions or create a new auction
- `/api/matches`: Get all matches or create a new match
- `/api/scoreboard`: Get the scoreboard
