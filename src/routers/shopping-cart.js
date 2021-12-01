const express = require('express');
const router = express.Router()

//***Variable con acceso al controllers */
const cartController = require('../controllers/indexController') 


//***Rutas para acceder al controler */
router.get('/', cartController.shoppingCart)



module.exports = router;