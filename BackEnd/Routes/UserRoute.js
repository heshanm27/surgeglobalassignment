const express = require("express");
const router = express.Router();

const {
  getUsersDetails,
  getUserDetailsById,
} = require("../Controllers/UserController");

router.route("/").get(getUsersDetails);
router.route("/:id").get(getUserDetailsById);
module.exports = router;
