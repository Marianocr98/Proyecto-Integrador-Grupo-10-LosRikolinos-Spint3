const express = require('express');
const router = express.Router();

const productDetail = require('../controllers/productController');

router.get('/', productDetail.productDetail);


module.exports = router;