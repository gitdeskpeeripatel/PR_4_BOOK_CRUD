const express = require('express');
const router = express.Router();
const bookRoutes = require('./book.router');

router.use('/', bookRoutes);


module.exports = router;