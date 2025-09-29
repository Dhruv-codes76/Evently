const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { validateSignup } = require("../middleware/validateRequest");

router.post("/signup", validateSignup, authController.signup);
router.post("/login", validateSignup, authController.login);

module.exports = router;
