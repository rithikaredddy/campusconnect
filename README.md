🎓 CampusConnect
A Modern Web-Based Campus Event Management Platform

CampusConnect is a full-stack web application designed to simplify event discovery, registration, and student engagement across college campuses.
It provides a clean, fast, responsive UI where users can browse events, register instantly, and track their participation through a personal dashboard.

🚀 Features
🌐 Frontend

✨ Clean & modern UI with React.js

🎛️ Interactive event cards

🔍 Search & category filters

📅 Event details & registration view

👤 User authentication (Login / Signup)

📊 Personal dashboard showing:

Registered events

Upcoming events

User department & year

🖥️ Backend

🧩 Node.js + Express REST API

🗄️ MongoDB database integration

🔐 Secure user login & registration

📝 API routes for events & registrations

📤 Returns formatted JSON responses

🏗 Architecture Overview

CampusConnect follows a Client–Server architecture:

Frontend (Client Layer)

React components for UI rendering

Axios/fetch for API communication

Route navigation for pages (Home, Events, Dashboard, Login, Signup)

Backend (Application Layer)

Express API

EventService for business logic (event list, registrations)

Routes:

GET /api/events

POST /api/register

Database (Persistence Layer)

MongoDB (events, users, registrations)

External Services

Optional: Email/SMS notifications

Optional: Storage of event files/images

📂 Project Folder Structure
CampusConnect/
│
├── frontend/                     # React Client
│   ├── public/
│   │    └── index.html
│   │
│   └── src/
│        ├── components/          # UI Components (Navbar, Cards, Forms)
│        ├── pages/               # Page-level components (Home, Events, Login)
│        ├── App.js
│        └── index.js
│
├── backend/                      # Node.js API Server
│   ├── controllers/              # Event & User controllers
│   ├── models/                   # MongoDB schemas
│   ├── routes/                   # API Routes
│   ├── config/                   # DB connection, environment setup
│   └── server.js                 # Main server file
│
├── package.json                  # Project metadata & dependencies
└── README.md


⚙️ Technologies & Tools Used
Frontend

React.js ⚛️

HTML5

CSS3

Axios for API calls

React Hooks

Backend

Node.js

Express.js

MongoDB / Mongoose

JSON Web Token (JWT) – optional

bcrypt for password hashing

Dev Tools

Git & GitHub

VS Code

npm (Node package manager)

▶️ How to Run the Project Locally
1️⃣ Clone the Repository
git clone https://github.com/your-username/CampusConnect.git
cd CampusConnect

2️⃣ Install Backend Dependencies
cd backend
npm install
npm start

3️⃣ Install Frontend Dependencies
cd ../frontend
npm install
npm start

4️⃣ Open in Browser
http://localhost:8080   → React frontend  
http://localhost:4000   → Node backend  

📸 Screenshots (Suggested for Documentation)

(Use these headings when adding images to your report)

Fig 1.1: Landing Page of CampusConnect

Fig 1.2: Upcoming Events Page

Fig 1.3: User Dashboard

Fig 1.4: Login Screen

Fig 1.5: Signup Screen

Fig 1.6: Event Registration Confirmation

🧪 Testing

Manual Testing Performed On:

UI navigation

Event search

Filtering

User login/signup

API response validation

Database insertions

📦 Deployment

CampusConnect can be deployed on:

GitHub Pages (Frontend)

Render / Railway (Backend)

MongoDB Atlas (Database)

👥 Contributors

Anumandla Rithika – Developer & UI Designer

📄 License

This project is for academic and demonstration purposes.
