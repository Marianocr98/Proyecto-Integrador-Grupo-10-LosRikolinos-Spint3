const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController')

router.get('/productos', productController.products);
router.get('/productDetail/:id', productController.productDetail);
router.get('/shopping-cart', productController.shoppingCart);
router.get('/create', productController.create);



module.exports = router;