GitHub Profile Analyzer

A full-stack web application that analyzes GitHub profiles and provides detailed insights such as followers, repositories, account age, top programming language, total stars, popularity score, and top repositories.

Features
Search any GitHub username
Analyze GitHub profile data using GitHub REST API
Calculate account age
Calculate total stars across repositories
Determine top programming language
Generate popularity score
Display top 5 repositories
Store analyzed profiles in MySQL
Automatically update existing profiles
View recently analyzed profiles
Responsive and modern UI

Tech Stack:

Frontend
React.js
Vite
Tailwind CSS
Axios
React Router DOM
React Toastify

Backend
Node.js
Express.js

Database
MySQL (Railway)

Deployment
Vercel (Frontend)
Render (Backend)

Project Structure
githubProfileAnalyzer/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── package.json
│
└── README.md
Installation
Clone Repository
git clone https://github.com/your-username/GitHub-Profile-Analyzer.git
cd GitHub-Profile-Analyzer
Backend Setup

Navigate to server directory:

cd server

Install dependencies:

npm install

Create .env file:

MYSQL_URL=your_mysql_connection_string
GITHUB_TOKEN=your_github_token

Start server:

npm start

Server runs on:

http://localhost:8080 OR https://github-profile-analyzer-db4b.onrender.com
Frontend Setup

Navigate to client directory:

cd client

Install dependencies:

npm install

Create .env file:

VITE_API_URL=http://localhost:8080 OR https://github-profile-analyzer-db4b.onrender.com

Run frontend:

npm run dev

Frontend runs on:

http://localhost:5173 OR https://git-hub-profile-analyzer-sooty.vercel.app/
API Endpoints
Analyze GitHub Profile
GET /api/analyze/:username

Example:

GET /api/analyze/octocat
Get All Profiles
GET /api/profiles
Get Single Profile
GET /api/profiles/:username
Database Schema:

github_profiles:

id
username
avatar_url
profile_url
followers
following
public_repos
account_age
total_stars
top_language
popularity_score
analyzed_at

repositories:

id
profile_id
repo_name
stars
forks
language
repo_url

Environment Variables

Backend
MYSQL_URL=
GITHUB_TOKEN=
Frontend
VITE_API_URL=
Deployment
Frontend

Deploy using Vercel:

Root Directory: client
Build Command: npm run build
Output Directory: dist
Install Command: npm install
Backend

Deploy using Render:

Build Command: npm install
Start Command: npm start
Future Improvements
GitHub contribution graph
Repository filtering
User comparison feature
Search history
Authentication
Dark/Light mode toggle
Author

Amar Gowardipe

Frontend Developer | MERN Stack Developer
