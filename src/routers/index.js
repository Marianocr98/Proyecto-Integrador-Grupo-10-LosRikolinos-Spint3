const express = require('express');
const router = express.Router();

const controllerIndex = require('../controllers/indexController');

router.get('/', controllerIndex.home);
router.get('/menu', controllerIndex.menu);
router.get('/shopping-cart', controllerIndex.shoppingCart);


module.exports = router;