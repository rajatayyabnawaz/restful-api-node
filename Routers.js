const express = require('express');
const { insertAllProducts, fetchAllProducts } = require('./Controller');
const router = express.Router();

// POST: insert only once
router.post('/', insertAllProducts);

// GET: fetch all products
router.get('/data', fetchAllProducts);

module.exports = router;
