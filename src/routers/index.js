const express = require('express');
const router = express.Router();

const controllerIndex = require('../controllers/indexController');

router.get('/', controllerIndex.home);




module.exports = router;