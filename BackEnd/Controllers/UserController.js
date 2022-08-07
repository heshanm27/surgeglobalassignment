const CustomAPIError = require("../Errors/CustomerError");
const userModel = require("../Models/UserModel");

const getUsersDetails = async (req, res) => {
  const users = await userModel.find({});
  res.status(200).json(users);

  if (!users) {
    throw new CustomAPIError("Users not found", 404);
  }
  throw new CustomAPIError(error.message, 500);
};

const getUserDetailsById = async (req, res) => {
  const user = await userModel.findById(req.params.id);
  res.status(200).json(user);

  if (!user) {
    throw new CustomAPIError("User not found", 404);
  }
  throw new CustomAPIError(error.message, 500);
};

const postUserDetails = async (req, res) => {
  const user = await userModel.create(req.body);
  res.status(201).json(user);

  throw new CustomAPIError(error.message, 500);
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
    throw new CustomAPIError("User not found", 404);
  }
  throw new CustomAPIError(error.message, 500);
};

module.exports = {
  getUsersDetails,
  getUserDetailsById,
  postUserDetails,
  updateUserDetails,
  deleteUserDetails,
};
