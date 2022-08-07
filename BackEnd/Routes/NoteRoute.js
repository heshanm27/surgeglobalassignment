const express = require("express");
const router = express.Router();

const {
  getNotesDetails,
  getNoteDetailsById,
  postNoteDetails,
  updateNoteDetails,
  deleteNoteDetails,
} = require("../Controllers/NoteController");

router.route("/").get(getNotesDetails);
router
  .route("/:id")
  .get(getNoteDetailsById)
  .post(postNoteDetails)
  .put(updateNoteDetails)
  .delete(deleteNoteDetails);

module.exports = router;
