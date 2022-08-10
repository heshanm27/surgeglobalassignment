const { default: mongoose } = require("mongoose");
const { CustomAPIError } = require("../Errors/errorClases");
const noteModel = require("../Models/NoteModel");

/**
 *
 * @description search note by search query and user who createdby and sort according to createdat date and limit the result according to page and limit
 */
const getNotesDetails = async (req, res) => {
  //get query values
  const search = String(req.query.search);
  const id = String(req.query.id);

  //get query values and set default values if not provided
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 5;
  //calculate skip value
  const skip = (page - 1) * limit;

  //get count of all notes
  let notesCount = await noteModel.find({ createdBy: id }).count();

  //get all notes and search by title and sort according to user who createdBy
  //and limit the result according to page and limit
  let notes = await noteModel
    .aggregate([
      {
        $match: {
          createdBy: mongoose.Types.ObjectId(id),
          $or: [{ title: { $regex: search, $options: "si" } }],
        },
      },
    ])
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  //calculate total pages
  notesCount = Math.ceil(notesCount / limit);
  res.status(200).json({ notes, notesCount });
};

//create new note
const postNoteDetails = async (req, res) => {
  const note = await noteModel.create(req.body);
  res.status(200).json({ note });
};

//update  note
const updateNoteDetails = async (req, res) => {
  console.log(req.body);
  const note = await noteModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    validator: true,
  });
  res.status(200).json(note);
};

//delete exsisting note
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

//export all functions
module.exports = {
  getNotesDetails,
  postNoteDetails,
  updateNoteDetails,
  deleteNoteDetails,
};
