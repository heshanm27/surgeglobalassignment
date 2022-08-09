const {
  BadRequestError,
  UnAuthenticatedError,
  CustomAPIError,
} = require("../Errors/errorClases");
const sendEmail = require("../Email/Email");
const userModel = require("../Models/UserModel");
const { StatusCodes } = require("http-status-codes");
const { v4: uuidv4 } = require("uuid");
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
  try {
    const user = await userModel.create({ id, email, password: tempPassword });
  } catch (error) {
    if (error.code === 11000) {
      throw new BadRequestError("User already exists");
    }
    throw error;
  }
  //send email with tempPassword
  const isSendEmail = await sendEmail(email, tempPassword);

  if (isSendEmail) {
    res.status(StatusCodes.OK).json({ isSendEmail });
  } else {
    throw new CustomAPIError(
      "Something went wrong while sending email",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

const signIn = async (req, res) => {
  const { email, password } = req.body;

  let user = await userModel.findOne({ email });

  if (!user) {
    throw new BadRequestError("Invalid Email");
  }

  const isPasswordValid = await user.validatePassword(password);

  if (!isPasswordValid) {
    throw new UnAuthenticatedError("Invalid Password");
  }

  const token = user.gearateJWTToken();
  user = {
    _id: user._id,
    id: user.id,
    email: user.email,
    status: user.status,
    accountType: user.accountType,
  };
  res.status(StatusCodes.OK).json({ token, user });
};

const updateUserDetailsById = async (req, res) => {
  console.log(req.params.id, req.body);
  const dataset = {
    ...req.body,
    status: false,
  };
  const user = await userModel.findByIdAndUpdate(req.params.id, dataset, {
    new: true,
    validator: true,
  });
  res.status(200).json({ user, token });
};

module.exports = { signUp, signIn, updateUserDetailsById };
