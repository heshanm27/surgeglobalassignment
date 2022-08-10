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

//Sign In Function for users
const signIn = async (req, res) => {
  const { email, password } = req.body;

  //find if user exists
  let user = await userModel.findOne({ email });

  //throw error if user not found
  if (!user) {
    throw new BadRequestError("Invalid Email");
  }

  //check if password is correct using mongofb static method
  const isPasswordValid = await user.validatePassword(password);

  //if password is not correct throw error
  if (!isPasswordValid) {
    throw new UnAuthenticatedError("Invalid Password");
  }
  //if password is correct generate token
  const token = user.gearateJWTToken();

  user = {
    _id: user._id,
    id: user.id,
    email: user.email,
    status: user.status,
    accountType: user.accountType,
    firstName: user.firstName,
  };
  //return user and token
  res.status(StatusCodes.OK).json({ token, user });
};

//update new user details
const updateUserDetailsById = async (req, res) => {
  console.log(req.body);
  console.log(req.header);
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];
  //update user status
  const dataset = {
    ...req.body,
    status: false,
  };
  //find user by id and update user details
  const user = await userModel.findByIdAndUpdate(req.params.id, dataset, {
    new: true,
    validator: true,
  });

  //return user and token
  res.status(200).json({ user, token });
};

module.exports = { signUp, signIn, updateUserDetailsById };
