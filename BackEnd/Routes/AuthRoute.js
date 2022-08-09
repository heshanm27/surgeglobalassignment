const express = require("express");
const router = express.Router();
const {
  signIn,
  signUp,
  updateUserDetailsById,
} = require("../Controllers/AuthController");
const { authenticationUser } = require("../middleware/authentication");

//default signup route
router.route("/signup").post(signUp);
//default signin route
router.route("/signin").post(signIn);
//default paramterised user route
router.route("/newuser/:id").patch(authenticationUser, updateUserDetailsById);

module.exports = router;
