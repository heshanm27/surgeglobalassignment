const express = require("express");
const router = express.Router();

const {
  getUsersDetails,
  getUserDetailsById,
  postUserDetails,
  updateUserDetails,
  deleteUserDetails,
} = require("../Controllers/UserController");

router.route("/");

module.exports = router;
