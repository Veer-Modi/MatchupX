# MatchupX
## Overview
The **Cricket Tournament Web App** is a comprehensive platform designed to manage cricket tournaments efficiently. It includes features like **team assignment**, **match scheduling**, **live auction for players**, **results tracking**, and **social media post integration**. The system uses **React** for the front end, **Node.js** with **MongoDB** for the backend, and **Firebase** for authentication.

## Features
### 1. User Authentication
- Google Login and Email/Password Authentication via Firebase.
- Secure user sessions and profile management.

### 2. Live Auction System
- Real-time player auction using WebSockets (`socket.io`).
- Admin controls to start, pause, or end the auction for each player.
- Players have a base price, and bidding takes place in real-time.

### 3. Match Scheduling
- Automatic and manual scheduling of matches.
- Supports knockout and league-style tournaments.
- Stores match details such as teams, date, and venue.

### 4. Results Tracking & Player Stats
- Tracks match outcomes, scores, and player performance (runs, wickets, averages, etc.).
- Updates tournament standings based on results.

### 5. Social Media Post Integration
- Allows users to link their Instagram/Twitter accounts.
- Fetches and displays cricket-related posts from users.

## Tech Stack
- **Frontend**: React (Vite + Tailwind CSS)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose for ODM)
- **Authentication**: Firebase (Google & Email/Password auth)
- **Real-Time Features**: WebSockets (`socket.io`)

## Minimum Viable Product (MVP)
The MVP will include the following core functionalities:
- User authentication with Firebase.
- Live match updates and scoreboards.
- A functional live auction system with real-time bidding.
- Match scheduling and tracking of results.
- A basic leaderboard showing team rankings and player performance.

## Future Enhancements
- Player trading and transfer system.
- AI-powered team balancing suggestions.
- Integration with third-party sports data APIs.

## Installation & Setup
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-repo/cricket-tournament-webapp.git
   cd cricket-tournament-webapp
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up Firebase:**
   - Create a Firebase project.
   - Enable authentication (Google & Email/Password login).
   - Update the `.env` file with Firebase credentials.

4. **Start the Development Server:**
   ```bash
   npm run dev
   ```

5. **Run the Backend Server:**
   ```bash
   cd backend
   npm install
   npm start
   ```

Members : 
[Mahir Patel](https://github.com/MahirPatel2005)
[Dev Patel](https://github.com/Dev2139)


