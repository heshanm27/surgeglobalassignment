const { CustomAPIError } = require("../Errors/errorClases");
const noteModel = require("../Models/NoteModel");

const getNotesDetails = async (req, res) => {
  const search = String(req.query.search);
  console.log(req.query.search);
  console.log(search);
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  let notesCount = await noteModel.find({}).count();
  let notes = await noteModel
    .find({
      $or: [
        {
          title: { $regex: search, $options: "i" },
        },
      ],
    })
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);
  notesCount = Math.ceil(notesCount / limit);
  res.status(200).json({ notes, notesCount });
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
  console.log(req.body);
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
