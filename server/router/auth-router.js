const express = require("express")
const router = express.Router();
const authControllers = require("../controllers/auth-controllers");
const { registerAuth } = require("../controllers/adminAuth.controllers");
const {authMiddleware} = require("../")

router.route("/").get(authControllers.home)
router.route("/addproduct").post(authControllers.addProduct);
router.route("/scanproduct").post(authControllers.scanProduct)
router.route("/sign-up/Admin").post(registerAuth);
router.route("/getproducts").post(authMiddleware)

module.exports = router