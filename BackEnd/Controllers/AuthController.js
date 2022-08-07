const {
  BadRequestError,
  UnAuthenticatedError,
} = require("../Errors/errorClases");
const userModel = require("../Models/UserModel");
const { StatusCodes } = require("http-status-codes");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  const { email } = req.body;

  //check email exists
  if (!email) {
    throw new BadRequestError("Email is required");
  }

  //genrate Tempory Password
  const tempPassword = uuidv4();

  //create user In MongoDB
  const user = await userModel.create({ id: 3, email, password: tempPassword });

  //create Jwt Token
  const jwtToken = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "15m" }
  );

  res.status(StatusCodes.OK).json({ tempPassword, jwtToken });
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
