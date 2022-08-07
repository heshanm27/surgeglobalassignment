const { createCustomError } = require("../Errors/customError");
const userModel = require("../Models/UserModel");

const getUsersDetails = async (req, res) => {
  const users = await userModel.find({});
  res.status(200).json(users);

  if (!users) {
    return createCustomError("Users not found", 404);
  }
};

const getUserDetailsById = async (req, res) => {
  const user = await userModel.findById(req.params.id);
  res.status(200).json(user);

  if (!user) {
    return createCustomError("User not found", 404);
  }
};

const postUserDetails = async (req, res) => {
  const user = await userModel.create(req.body);
  res.status(201).json(user);
};

const updateUserDetails = async (req, res) => {
  const user = await userModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(user);
};

const deleteUserDetails = async (req, res) => {
  const user = await userModel.findByIdAndDelete(req.params.id);
  res.status(200).json(user);

  if (!user) {
    return createCustomError("User not found", 404);
  }
};

module.exports = {
  getUsersDetails,
  getUserDetailsById,
  postUserDetails,
  updateUserDetails,
  deleteUserDetails,
};
