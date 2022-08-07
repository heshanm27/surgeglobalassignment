const { CustomAPIError } = require("../Errors/errorClases");
const noteModel = require("../Models/NoteModel");

const getNotesDetails = async (req, res) => {
  let notes = await noteModel.find({}).sort({ createdAt: -1 });

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  notes = notes.skip(skip).limit(limit);
  res.status(200).json(notes);
};

const getNoteDetailsById = async (req, res) => {
  const note = await noteModel.findById(req.params.id);
  if (!note) {
    throw new CustomAPIError("note not found", 404);
  }
  res.status(200).json(note);
};

const postNoteDetails = async (req, res) => {
  const note = await noteModel.create(req.body);
  res.status(200).json({ note });
};

const updateNoteDetails = async (req, res) => {
  const note = await noteModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    validator: true,
  });
  res.status(200).json(note);
};

const deleteNoteDetails = async (req, res) => {
  try {
    const note = await noteModel.findByIdAndDelete(req.params.id, {
      new: true,
    });
    res.status(200).json(note);
  } catch (err) {
    console.log(err.reason.BSONTypeError);
    throw new CustomAPIError("User not found", 404);
  }
};

module.exports = {
  getNotesDetails,
  getNoteDetailsById,
  postNoteDetails,
  updateNoteDetails,
  deleteNoteDetails,
};
