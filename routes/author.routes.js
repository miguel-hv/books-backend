const express = require('express');
const controller = require('../controllers/author.controller');
const router = express.Router();


router.get("/:id", controller.authorGet);
router.post("/", controller.authorPost);
router.put("/:id", controller.authorPut);
// router.delete("/", controller.authorDelete);

module.exports = router;