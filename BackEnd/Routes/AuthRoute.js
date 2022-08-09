const express = require("express");
const router = express.Router();
const {
  signIn,
  signUp,
  updateUserDetailsById,
} = require("../Controllers/AuthController");
const { authenticationUser } = require("../middleware/authentication");
router.route("/signup").post(signUp);
router.route("/signin").post(signIn);
router.route("/newuser/:id").patch(authenticationUser, updateUserDetailsById);

module.exports = router;
