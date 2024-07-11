const express = require("express");
const router = express.Router();
const EcommController = require("../controller/e-commerceControl.js");

router.get("/categories" , EcommController.categories);
router.get("/categories/:categoryName/products" , EcommController.products);

module.exports = router;