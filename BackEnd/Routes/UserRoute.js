const express = require("express");
const router = express.Router();

const {
  getUsersDetails,
  getUserDetailsById,
  postUserDetails,
  updateUserDetails,
  deleteUserDetails,
} = require("../Controllers/UserController");

router.route("/").get(getUsersDetails);
router
  .route("/:id")
  .get(getUserDetailsById)
  .post(postUserDetails)
  .put(updateUserDetails)
  .delete(deleteUserDetails);

module.exports = router;
