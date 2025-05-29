# book-management-api
# Book Management REST API

A simple RESTful API built with **Node.js** and **Express** to manage a list of books in memory.  
This project demonstrates basic CRUD (Create, Read, Update, Delete) operations without a database.

---

## Features

- **GET /books** - Retrieve all books  
- **POST /books** - Add a new book  
- **PUT /books/:id** - Update an existing book by ID  
- **DELETE /books/:id** - Delete a book by ID  

Books are stored in an in-memory array, so data is lost when the server restarts.

---

## Technologies Used

- Node.js  
- Express.js  

---

## Setup and Usage

1. **Clone the repository**

```bash
git clone https://github.com/your-username/book-management-api.git
cd book-management-api

Install dependencies:npm install
Start the server :npm start
The server will run at:
http://localhost:4000

API Endpoints
Get all books:  GET /books
Add a new book : POST /books
Content-Type: application/json

Update a book:PUT /books/:id
Content-Type: application/json

Delete a book :DELETE /books/:id

##Testing the API
Test endpoints using:
Curl (Command Prompt or Terminal)
VS Code REST Client extension (recommended)

