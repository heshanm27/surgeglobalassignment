const express = require("express");
const router = express.Router();

const {
  getUsersDetails,
  getUserDetailsById,
} = require("../Controllers/UserController");
const { authenticationAdmin } = require("../middleware/authenticationAdmin");
router.route("/").get(authenticationAdmin, getUsersDetails);
router.route("/:id").get(authenticationAdmin, getUserDetailsById);

module.exports = router;
