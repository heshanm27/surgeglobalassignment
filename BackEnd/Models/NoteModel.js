const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema(
  {
    title: { type: String, required: [true, "Title is required"] },
    discription: { type: String },
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Note", NoteSchema);
