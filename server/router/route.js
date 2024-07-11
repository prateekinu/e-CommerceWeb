const express = require("express");
const router = express.Router();
const EcommController = require("../controller/e-commerceControl.js");

router.get("/" , EcommController.homepage);

module.exports = router;