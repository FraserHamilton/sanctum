var express = require("express");
var router = express.Router();

var deviceController = require("../controllers/deviceController.js");

router.get("/", deviceController.device_list);

router.post("/", deviceController.device_add);

router.post("/:id/remove", deviceController.device_remove);

router.get("/:id", deviceController.device_detail);

router.get("/:id/toggle", deviceController.device_toggle);

module.exports = router;
