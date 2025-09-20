const express = require('express');
const router = express.Router();
const { getTopProducts } = require('../controllers/analyticsController');

router.get('/top-products', getTopProducts);

module.exports = router;
