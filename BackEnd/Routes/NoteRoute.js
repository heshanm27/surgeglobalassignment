const express = require("express");
const router = express.Router();

const {
  getNotesDetails,
  getNoteDetailsById,
  postNoteDetails,
  updateNoteDetails,
  deleteNoteDetails,
} = require("../Controllers/NoteController");

router.route("/").post(postNoteDetails).get(getNotesDetails);
router
  .route("/:id")
  .get(getNoteDetailsById)
  .patch(updateNoteDetails)
  .delete(deleteNoteDetails);

module.exports = router;
