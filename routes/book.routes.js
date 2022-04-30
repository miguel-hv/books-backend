const express = require('express');
const controller = require('../controllers/book.controller');
const router = express.Router();


router.get("/:id", controller.bookGet);
router.post("/", controller.bookPost);

module.exports = router;