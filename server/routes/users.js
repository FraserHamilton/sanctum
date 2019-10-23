var express = require("express");
var router = express.Router();

var userController = require("../controllers/userController.js");

router.get("/", userController.user_list);

// router.get("/:id", userController.user_detail);

module.exports = router;
