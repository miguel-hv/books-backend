const express = require('express');
const controller = require('../controllers/book.controller');
const router = express.Router();


router.get("/:id", controller.bookGet);
router.post("/", controller.bookPost);
router.put("/:id", controller.bookPut);
router.delete("/:id", controller.bookDelete);

module.exports = router;