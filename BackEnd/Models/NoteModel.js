const mongoose = require("mongoose");

//Create Note schema
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

//Create Note model from schema
module.exports = mongoose.model("Note", NoteSchema);
