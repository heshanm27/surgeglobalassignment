const { CustomAPIError } = require("../Errors/errorClases");
const userModel = require("../Models/UserModel");

const getUsersDetails = async (req, res) => {
  const users = await userModel.find({});
  if (!users) {
    throw new CustomAPIError("Users not found", 404);
  }
  res.status(200).json(users);
};

const getUserDetailsById = async (req, res) => {
  const user = await userModel.findById(req.params.id);

  if (!user) {
    throw new CustomAPIError("User not found", 404);
  }

  res.status(200).json(user);
};

module.exports = {
  getUsersDetails,
  getUserDetailsById,
};
