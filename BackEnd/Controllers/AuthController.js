const { BadRequestError } = require("../Errors/errorClases");
const userModel = require("../Models/UserModel");
const { StatusCodes } = require("http-status-codes");

const signUp = async (req, res) => {
  const { email } = req.body;
  console.log(email);

  if (email) {
    console.log("n");
    throw new BadRequestError("Email is required");
  }
  const tempPassword = email + new Date().getTime();
  console.log(tempPassword);

  //   const user = await userModel.create({ email, password: tempPassword });

  res.status(StatusCodes.OK).json("js");
};

const signIn = async (req, res) => {};

module.exports = { signUp, signIn };
