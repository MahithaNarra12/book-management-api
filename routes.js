const express = require('express');
const router = express.Router();
const bookController = require('./controllers'); // Import controller

// Route for getting all books
router.get('/', bookController.getAllBooks);

// Route for adding a book
router.post('/', bookController.addBook);

// Route for updating a book
router.put('/:id', bookController.updateBook);

// Route for deleting a book
router.delete('/:id', bookController.deleteBook);

module.exports = router;
