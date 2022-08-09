const { default: mongoose } = require("mongoose");
const { CustomAPIError } = require("../Errors/errorClases");
const noteModel = require("../Models/NoteModel");

const getNotesDetails = async (req, res) => {
  const search = String(req.query.search);
  const id = String(req.query.id);
  console.log(id);
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 5;
  const skip = (page - 1) * limit;
  let notesCount = await noteModel.find({ createdBy: id }).count();
  let notes = await noteModel
    .aggregate([
      {
        $match: {
          createdBy: mongoose.Types.ObjectId(id),
          $or: [
            { title: { $regex: search, $options: "si" } },
            { discription: { $regex: search, $options: "i" } },
          ],
        },
      },
    ])
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);
  console.log(notes);
  notesCount = Math.ceil(notesCount / limit);
  res.status(200).json({ notes, notesCount });
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
  postNoteDetails,
  updateNoteDetails,
  deleteNoteDetails,
};
