const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller');

// Home page route
router.get('/',bookController.homePage);

// Add book page route
router.get('/add', bookController.addBookPage);
router.post('/add', bookController.addBook);

// View books route
router.get('/view', bookController.viewBookPage);

// Delete book route
router.get('/delete/:id', bookController.deleteBook);

// Edit book page route
router.get('/edit/:id', bookController.editBookPage);
router.post('/edit/:id', bookController.editBook);
module.exports = router;