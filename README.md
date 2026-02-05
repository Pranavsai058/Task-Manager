project:
  name: Task Management Web Application
  type: Full Stack Web App
  purpose: Internship Skill Assessment

overview:
  description: >
    A full-stack task management application that supports creating,
    viewing, updating, deleting, and filtering tasks using a RESTful API
    with persistent database storage.
  focus:
    - Frontend fundamentals
    - REST API design
    - Database integration
    - Clean project structure

features:
  - Create tasks with title, description, and status
  - View all tasks stored in database
  - Update existing tasks using PUT API
  - Delete tasks
  - Filter tasks by status (pending, in-progress, completed)
  - Persistent storage using MongoDB

tech_stack:
  frontend:
    - HTML
    - CSS
    - JavaScript (Vanilla)
  backend:
    - Node.js
    - Express.js
  database:
    - MongoDB
    - Mongoose

architecture:
  pattern: MVC
  flow:
    - Client sends HTTP request
    - Express routes handle endpoint
    - Controller processes logic
    - Mongoose model interacts with database
    - JSON response returned to client

project_structure:
  task-manager:
    backend:
      controllers:
        - taskController.js
      models:
        - Task.js
      routes:
        - taskRoutes.js
      config:
        - db.js
      files:
        - server.js
        - package.json
        - .env
    frontend:
      files:
        - index.html
        - style.css
        - script.js

api_endpoints:
  - method: GET
    endpoint: /api/tasks
    description: Fetch all tasks
  - method: POST
    endpoint: /api/tasks
    description: Create a new task
  - method: PUT
    endpoint: /api/tasks/:id
    description: Update an existing task
  - method: DELETE
    endpoint: /api/tasks/:id
    description: Delete a task

database_schema:
  task:
    title:
      type: String
      required: true
    description:
      type: String
    status:
      type: Enum
      values:
        - pending
        - in-progress
        - completed
    timestamps:
      - createdAt
      - updatedAt

setup:
  prerequisites:
    - Node.js
    - MongoDB Atlas or local MongoDB
  backend:
    steps:
      - Clone repository
      - Navigate to backend directory
      - Run npm install
      - Create .env file with PORT and MONGO_URI
      - Run npm run dev
    server_url: http://localhost:5000
  frontend:
    steps:
      - Open frontend directory
      - Open index.html in browser or Live Server

frontend_behavior:
  - Uses Fetch API for HTTP requests
  - Single form reused for create and update operations
  - Client-side filtering for fast UI response

status:
  completion: Completed
  backend: Stable
  frontend: Stable
  database: Connected

future_enhancements:
  - User authentication
  - Backend-side filtering and pagination
  - Deployment
  - Automated testing

author:
  name: Pranav
  role: Full Stack Developer Intern Applicant

notes:
  - Built as part of a Full Stack Development Internship assessment
  - Emphasis on clarity, structure, and core fundamentals
