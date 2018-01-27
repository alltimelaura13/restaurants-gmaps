const express = require('express');
const router = express.Router();

const multer = require('multer');
const upload = multer({ dest: 'documents/' });

const restaurantsController = require('../controllers/restaurants.controller');

// router.get, router.post ...
router.get('/', restaurantsController.index);
module.exports = router;
