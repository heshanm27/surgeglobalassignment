const CustomAPIError = require("../Errors/CustomerError");
const noteModel = require("../Models/NoteModel");

const getNotesDetails = async (req, res) => {
  const notes = await noteModel.find({});
  if (!notes) {
    return CustomAPIError("notes not found", 404);
  }
  res.status(200).json(notes);
};

const getNoteDetailsById = async (req, res) => {
  const note = await noteModel.findById(req.params.id);
  if (!note) {
    return CustomAPIError("note not found", 404);
  }
  res.status(200).json(note);
};

const postNoteDetails = async (req, res) => {
  const note = await noteModel.create(req.body);

  res.status(200).json(note);
};

const updateNoteDetails = async (req, res) => {
  const note = await noteModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    validator: true,
  });
  res.status(200).json(note);
};

const deleteNoteDetails = async (req, res) => {
  const note = await noteModel.findByIdAndDelete(req.params.id, {
    new: true,
  });
  res.status(200).json(note);
};

module.exports = {
  getNotesDetails,
  getNoteDetailsById,
  postNoteDetails,
  updateNoteDetails,
  deleteNoteDetails,
};
