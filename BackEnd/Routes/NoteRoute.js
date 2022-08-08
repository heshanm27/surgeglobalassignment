const express = require("express");
const router = express.Router();

const {
  getNotesDetails,
  getNoteDetailsById,
  postNoteDetails,
  updateNoteDetails,
  deleteNoteDetails,
} = require("../Controllers/NoteController");
const {
  authenticationAdmin,
  authenticationUser,
} = require("../middleware/authentication");
router
  .route("/")
  .get(authenticationAdmin, getNotesDetails)
  .post(postNoteDetails);
router
  .route("/:id")
  .get(getNoteDetailsById)
  .patch(updateNoteDetails)
  .delete(deleteNoteDetails);

module.exports = router;
