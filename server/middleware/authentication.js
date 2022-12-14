const jwt = require("jsonwebtoken");
const {
  UnAuthenticatedError,
  BadRequestError,
  CustomAPIError,
} = require("../Errors/errorClases");

/**
 *
 * @description middleware for the authentication of the Admin user with the JWT Token
 * if token invalid throw error
 * if token valid and user is a admin return next() to continue the request
 */
const authenticationAdmin = async (req, res, next) => {
  // check header
  const authHeader = req.headers.authorization;

  //cheack if header is empty or start with Bearer
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnAuthenticatedError("Authentication invalid no token");
  }

  //split the Bearer from the token
  const token = authHeader.split(" ")[1];

  try {
    // verify the token
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    //check if user is a admin
    if (payload.accountType !== "admin") {
      throw new UnAuthenticatedError("No permission for this action");
    }

    next();
  } catch (error) {
    //check custom error or default error
    if (error instanceof CustomAPIError) {
      throw new UnAuthenticatedError(error.message);
    } else {
      throw new UnAuthenticatedError("Invalid token");
    }
  }
};

/**
 *
 * @description middlewre for the authentication of the user with the JWT Token
 * if token invalid throw error
 * if token valid  return next() to continue the request
 */
const authenticationUser = async (req, res, next) => {
  // check header
  const authHeader = req.headers.authorization;

  //cheack if header is empty or start with Bearer
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnAuthenticatedError("Authentication invalid");
  }

  //split the Bearer from the token
  const token = authHeader.split(" ")[1];

  try {
    // verify the token
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    throw new UnAuthenticatedError("Authentication invalid");
  }
};

module.exports = { authenticationUser, authenticationAdmin };
