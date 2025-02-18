# Blog API

A simple Blog API built using Node.js, Express, and MongoDB. This API allows users to manage blog posts with basic CRUD (Create, Read, Update, Delete) operations. It also supports user authentication for creating, updating, and deleting posts.

## Features
- **User Authentication**: Register and login users.
- **Create**: Add new blog posts.
- **Read**: Retrieve all blog posts or a specific post.
- **Update**: Modify blog posts.
- **Delete**: Remove blog posts.

## Tech Stack
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)

## Setup

### Prerequisites
- Node.js
- MongoDB (You can use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud-based solution)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/blog-api.git
   cd blog-api
2. **Install dependencies**:
   ```bash
   npm install
3. **Set up MongoDB**:
   Create a MongoDB database (you can use MongoDB Atlas or a local MongoDB instance).
   Replace the database URL in server.js with your MongoDB connection string.
4. **Run the application**:
   ```bash
   npm start
The server will start on http://localhost:3000.

## API Endpoints

### POST /users/register

Register a new user.

**Request Body**:
- ```json
  {
  "username": "username",
  "email": "user@example.com",
  "password": "password123"
  }


**Response**:
- ```json
  {
  "message": "User registered successfully.",
  "user": {
    "_id": "user-id",
    "username": "username",
    "email": "user@example.com"
  }
  }


### POST /users/login

Login an existing user and receive a JWT token.

**Request Body**:
- ```json
  {
  "email": "user@example.com",
  "password": "password123"
  }

**Response**:
- ```json
  {
  "token": "jwt-token"
  }


### POST /posts

Create a new blog post (authentication required).

**Request Body**:
- ```json
  {
  "title": "Blog Post Title",
  "content": "Blog Post Content"
  }

**Response**:
- ```json
  {
  "post": {
    "_id": "post-id",
    "title": "Blog Post Title",
    "content": "Blog Post Content",
    "author": "user-id",
    "createdAt": "2023-02-18T00:00:00.000Z",
    "updatedAt": "2023-02-18T00:00:00.000Z"
  }
  }


### GET /posts

Get all blog posts.

**Response**:
- ```json
  [
  {
    "_id": "post-id",
    "title": "Blog Post Title",
    "content": "Blog Post Content",
    "author": "user-id",
    "createdAt": "2023-02-18T00:00:00.000Z",
    "updatedAt": "2023-02-18T00:00:00.000Z"
  },
  ]

### GET /posts/:id

Get a specific blog post by ID.

**Response**:
- ```json
  {
  "_id": "post-id",
  "title": "Blog Post Title",
  "content": "Blog Post Content",
  "author": "user-id",
  "createdAt": "2023-02-18T00:00:00.000Z",
  "updatedAt": "2023-02-18T00:00:00.000Z"
  }

### PUT /posts/:id

Update a blog post (authentication required).

**Request Body**:
- ```json
  {
  "title": "Updated Blog Post Title",
  "content": "Updated Blog Post Content"
  }

**Response**:
- ```json
  {
  "post": {
    "_id": "post-id",
    "title": "Updated Blog Post Title",
    "content": "Updated Blog Post Content",
    "author": "user-id",
    "createdAt": "2023-02-18T00:00:00.000Z",
    "updatedAt": "2023-02-18T00:00:00.000Z"
  }
  }


### DELETE /posts/:id

Delete a blog post by ID (authentication required).

**Response**:
- ```json
  {
  "message": "Blog post deleted successfully."
  }

## Contributing

1. Fork the repository.
2. Create a new branch: git checkout -b feature-branch.
3. Commit your changes: git commit -m 'Add new feature'.
4. Push to the branch: git push origin feature-branch.
5. Open a pull request.

