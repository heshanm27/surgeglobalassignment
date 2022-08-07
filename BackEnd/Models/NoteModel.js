const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema(
  {
    title: { type: String },
    discription: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Note", NoteSchema);
