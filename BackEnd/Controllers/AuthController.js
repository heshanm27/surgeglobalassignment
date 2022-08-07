const { createCustomError } = require("../Errors/customError");
const userModel = require("../Models/UserModel");
const { StatusCodes } = require("http-status-codes");
const signUp = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return createCustomError("Email is required", StatusCodes.BAD_REQUEST);
  }
  const tempPassword = email + new Date().getTime();

  const user = await userModel.create({ email, password: tempPassword });

  res.status(StatusCodes.OK).json(user);
};

const signIn = async (req, res) => {};

module.exports = { signUp, signIn };
