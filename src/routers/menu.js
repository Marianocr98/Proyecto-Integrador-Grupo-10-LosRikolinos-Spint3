const express = require('express')
const router = express.Router()

const indexController = require('../controllers/indexController')

router.get('/',indexController.menu)

module.exports = router; 