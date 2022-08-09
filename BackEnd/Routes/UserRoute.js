const express = require("express");
const router = express.Router();

const { getUsersDetails } = require("../Controllers/UserController");

//default user route
router.route("/").get(getUsersDetails);

module.exports = router;
