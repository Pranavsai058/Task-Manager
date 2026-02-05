Task Management Web Application

A simple full-stack Task Management application that allows users to create, view, update, delete, and filter tasks.
Built to demonstrate core full-stack fundamentals including REST APIs, database persistence, and frontend-backend integration.

Features

Create new tasks with title, description, and status

View all tasks stored in the database

Edit existing tasks using a single reusable form (PUT)

Delete tasks

Filter tasks by status (Pending, In Progress, Completed)

Persistent data storage using MongoDB

Tech Stack
Frontend

HTML

CSS

JavaScript (Vanilla)

Backend

Node.js

Express.js

MongoDB

Mongoose

Project Structure

task-manager/
│
├── backend/
│   ├── controllers/
│   │   └── taskController.js
│   ├── models/
│   │   └── Task.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── config/
│   │   └── db.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── frontend/
    ├── index.html
    ├── style.css
    └── script.js

API Endpoints
Method	Endpoint	Description
GET	/api/tasks	Fetch all tasks
POST	/api/tasks	Create a new task
PUT	/api/tasks/:id	Update an existing task
DELETE	/api/tasks/:id	Delete a task
Database Schema (Task)

title (String, required)

description (String)

status (pending | in-progress | completed)

createdAt (Timestamp)

updatedAt (Timestamp)

Setup Instructions
Prerequisites

Node.js installed

MongoDB Atlas account (or local MongoDB)

Backend Setup

Clone the repository

git clone <repository-url>


Navigate to backend folder

cd backend


Install dependencies

npm install


Create .env file

PORT=5000
MONGO_URI=your_mongodb_connection_string


Start the server

npm run dev


Server will run on:

http://localhost:5000

Frontend Setup

Open the frontend folder

Open index.html in a browser
(or use Live Server in VS Code)

The frontend will communicate with the backend using REST APIs.

How It Works

Frontend uses fetch API to communicate with backend endpoints

Backend follows MVC structure:

Routes handle URLs

Controllers contain business logic

Models interact with MongoDB

A single form is reused for both creating and updating tasks

Filtering is handled client-side for fast response


Future Improvements

Authentication (Login/Register)

Backend filtering and pagination

Deployment using Render / Railway / Vercel

Unit and integration tests

UI enhancements

Author

Pranav

Notes

This project was built as part of a Full Stack Development Internship skill assessment to demonstrate practical understanding of frontend development, backend APIs, databases, and clean project structure.