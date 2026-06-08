Social Hub – Social Media Web Application
Overview
Social Hub is a full-stack social media web application developed to provide users with a platform to connect, share posts, interact through likes and comments, and manage personal profiles. The project focuses on creating a responsive and user-friendly social networking experience.

Features
User Registration and Login Authentication
Create, View, and Manage Posts
Like and Comment on Posts
User Profile Management
Follow and Unfollow Users
Notifications System
Responsive User Interface
Secure Backend with JWT Authentication
MongoDB Database Integration
Tech Stack
Frontend
HTML5
CSS3
JavaScript
Backend
Node.js
Express.js
Database
MongoDB
Mongoose
Authentication
JWT (JSON Web Token)
bcrypt.js
Project Structure
socialhub/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
├── index.html
├── profile.html
├── activities.html
└── other frontend files
Installation
1. Clone the Repository
git clone https://github.com/your-username/socialhub.git
cd socialhub
2. Install Backend Dependencies
cd backend
npm install
3. Configure Environment Variables
Create a .env file inside the backend folder:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
4. Run the Server
node server.js
Server will start at:
http://localhost:5000
API Modules
Authentication Routes
User Management Routes
Post Management Routes
Notification Routes
Learning Outcomes
Full-Stack Web Development
REST API Development
Database Design with MongoDB
Authentication and Authorization
Frontend and Backend Integration
Responsive UI Development
Future Enhancements
Real-time Chat System
Story Feature
Image Upload via Cloud Storage
Dark Mode
Advanced Search Functionality
Mobile Application Support
Author
Keerthi Kalla
CodeAlpha Internship Project
License
This project is developed for educational and internship purposes.
