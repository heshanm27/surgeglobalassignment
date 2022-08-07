const express = require("express");
const router = express.Router();

const {
  getNotesDetails,
  getNoteDetailsById,
  postNoteDetails,
  updateNoteDetails,
  deleteNoteDetails,
} = require("../Controllers/NoteController");

router.route("/");

module.exports = router;
