FitLife

FitLife is a full-stack web application designed to help users track their fitness progress, connect with friends, and stay motivated by sharing their workouts and goals. The application features a social feed where users can see updates from their friends, such as logged workouts and achieved goals.

Table of Contents

Features Tech Stack Installation Usage API Endpoints Contributing License Features User Authentication: Users can sign up, log in, and manage their profiles. Workout Logging: Users can log their workouts with details such as type, duration, and calories burned. Goal Setting: Users can set and track their fitness goals. Friend Management: Users can search for friends by email and add them to their friend list. Social Feed: Users can see updates from their friends, including logged workouts and achieved goals.

Tech Stack:

Frontend: React.js Backend: Node.js, Express.js Database: MongoDB Authentication: JWT (JSON Web Tokens) and bcrypt CSS: Styled using custom styles

Installation:

Prerequisites Node.js (v14 or later) MongoDB (local instance or MongoDB Atlas) npm or yarn Install Dependencies: both backend and frontend Configure Environment Variables

Backend Create a .env file in the backend directory and add the following environment variables:

env Copy code PORT=5000 MONGO_URI=(your_mongo_db_connection_string) JWT_SECRET=(your_jwt_secret)

Frontend Create a .env file in the frontend directory and add the following environment variables: REACT_APP_API_URL=http://localhost:5000/api

To Run the Application:

Backend: cd backend npm start

Frontend: cd frontend npm start

The application should now be running on http://localhost:3000.

Usage: Sign up for a new account or log in with existing credentials. Navigate to the dashboard to log workouts and set goals. Use the search bar to find friends by their username and add them to your friend list. Check the social feed to see updates from your friends. Logout to exit from dashboard.

API Endpoints: User Endpoints: POST /api/users/register: Register a new user POST /api/users/login: Log in a user GET /api/users/me: Get current user details

Workout Endpoints: POST /api/workouts: Log a new workout GET /api/workouts/ : Get workouts by user ID

Goal Endpoints: POST /api/goals: Set a new goal GET /api/goals/ : Get goals by user ID

Social Endpoints: GET /api/socialfeed/users: Get all users GET /api/socialfeed/workouts/ : Get workouts by user ID GET /api/socialfeed/goals/ : Get goals by user ID

Contributions are welcome! Please fork the repository and create a pull request with your changes. Fork the repository Create a new branch (git checkout -b feature-branch) Commit your changes (git commit -m 'Add some feature') Push to the branch (git push origin feature-branch) Open a pull request
