const express = require("express");
const router = express.Router();
const { signIn, signUp } = require("../Controllers/AuthController");

router.route("/signup").post(signUp);
router.route("/signin").post(signIn);

module.exports = router;
