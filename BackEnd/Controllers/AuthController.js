const {
  BadRequestError,
  UnAuthenticatedError,
  CustomAPIError,
} = require("../Errors/errorClases");
const sendEmail = require("../Email/Email");
const userModel = require("../Models/UserModel");
const { StatusCodes } = require("http-status-codes");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const UserModel = require("../Models/UserModel");

const signUp = async (req, res) => {
  const { email } = req.body;

  //check email exists
  if (!email) {
    throw new BadRequestError("Email is required");
  }

  //genrate Tempory Password
  const tempPassword = uuidv4();

  //call mongoose static method for get a new userID
  const id = (await UserModel.gearateId()) + 1;

  //create user In MongoDB
  const user = await userModel.create({ id, email, password: tempPassword });

  //send email with tempPassword
  const isSendEmail = await sendEmail(email, tempPassword);

  if (isSendEmail) {
    res.status(StatusCodes.OK).json({ isSendEmail });
  } else {
    throw new CustomAPIError(
      "Email not sent",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

const signIn = async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    throw new BadRequestError("User not found");
  }

  const isPasswordValid = await user.validatePassword(password);
  if (!isPasswordValid) {
    throw new UnAuthenticatedError("Invalid Password");
  }

  res.status(StatusCodes.OK).json({ user });
};

module.exports = { signUp, signIn };
