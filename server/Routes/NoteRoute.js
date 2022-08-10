const express = require("express");
const router = express.Router();

const {
  getNotesDetails,
  postNoteDetails,
  updateNoteDetails,
  deleteNoteDetails,
} = require("../Controllers/NoteController");

//default note route
router.route("/").get(getNotesDetails).post(postNoteDetails);
//paramterised note route
router.route("/:id").patch(updateNoteDetails).delete(deleteNoteDetails);

module.exports = router;
