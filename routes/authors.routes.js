const express = require('express');
const controller = require('../controllers/authors.controller');
const router = express.Router();


router.get("/", controller.authorsGet);

module.exports = router;