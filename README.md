# Article Project API's

## Introduction
<!-- A brief overview of what the project does, its purpose, and its main features. -->
This is a basic Node.js application that demonstrates user authentication using JWT (JSON Web Tokens) and MongoDB as the database. It includes APIs for user registration, login, profile retrieval, and CRUD operations on articles with proper authentication and authorization.

## Features
This project includes the following features:

### User Authentication and Authorization

- **JWT Authentication**: Secure user authentication using JSON Web Tokens.
- **User Registration**: API endpoint for new users to register with name, email, and password.
- **User Login**: API endpoint for users to log in and receive a JWT token.
- **Protected Routes**: Middleware to protect routes that require authentication. Only authenticated users can access these routes.

### User Profile Management

- **Get User Profile**: Authenticated users can retrieve their profile information, excluding their password.

### Article Management

- **Create Articles**: Authenticated users can create new articles with a title and content.
- **Read Articles**: Public endpoint to retrieve all articles, including author information.
- **Update Articles**: Authenticated users can update their own articles.
- **Delete Articles**: Authenticated users can delete their own articles.

### Data Persistence

- **MongoDB Integration**: Uses MongoDB as the database to store user information and articles.
- **Mongoose**: Simplifies MongoDB interactions with schemas and models.

### Security

- **Password Hashing**: User passwords are securely hashed using bcrypt before storing them in the database.
- **Token Expiration**: JWT tokens have an expiration time to enhance security.
- **Authorization**: Ensures that only the authors of the articles can update or delete them.

## Getting Started

### Prerequisites

1. To run the application you need to have Node JS installed.
2. MongoDB Atlas Account
3. GIT Bash

### Quick Start
A simple example to get started with the project.
1. Cloning repository from GITHUB
2. Install all node-modules
```
npm i
```
3. Create a .ENV (Inside ENV)
`````
PORT = 5000
DB_URI = "Provide mongoDB(Atlas) URI"
JWT_SECRET = "Random String(your Email)"
`````
4. Start Project

```
npm start
```

### Code Structure

Using the MVC Structure for the Code practices.

## API Documentation
API Documentation- There are two types of APi's. these are Users api's and article management api's. You can perform the CRUD Operations.

Step to use Api:- In the APi's we are using the Authentication using JWT, So first you can register yourself using /register API and the login using /login API and take the Token from it and pass in an authorization after that you can perform the others api to access the data.  

# NOTE :- Please do refer to Postman collection for particular API's Payloads. Otherwise it will through an error.

# Note :- Please passed the sourceVerification in the headers for secure the api's from thread.
```
Quokka_Labs
```

## API ENDPOINTS
## USER
1. POST /api/v1/auth/register: Create a new user.
2. POST /api/v1/auth/login : Login a user.
3. GET /api/v1/user/getProfile/:id : Retrieve user information.
4. GET /api/v1/user/getProfiles: Fetching all users data.

## Article
1. POST /api/v1/article/createArticle: Create a new Article.
2. GET /api/v1/article/fetchArticle : Fetch All Articles.
3. PUT /api/v1/article/updateArticle/:id : Update Article information.
4. DELETE /api/v1/article/deleteArticle/:id : Delete a Article.

## POSTMAN COLLECTION

Postman Url

```
https://documenter.getpostman.com/view/21334201/2sA3kdByMR
```
