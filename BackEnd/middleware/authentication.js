const jwt = require("jsonwebtoken");
const {
  UnAuthenticatedError,
  BadRequestError,
  CustomAPIError,
} = require("../Errors/errorClases");

const authenticationAdmin = async (req, res, next) => {
  // check header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnAuthenticatedError("Authentication invalid no token");
  }
  const token = authHeader.split(" ")[1];

  try {
    // verify the token
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    console.log(payload.accountType !== "admin");
    if (payload.accountType !== "admin") {
      throw new UnAuthenticatedError("No permission for this action");
    }

    next();
  } catch (error) {
    console.log(error);
    if (error instanceof CustomAPIError) {
      throw new UnAuthenticatedError(error.message);
    } else {
      throw new UnAuthenticatedError("Invalid token");
    }
  }
};

const authenticationUser = async (req, res, next) => {
  // check header
  // throw new BadRequestError("Authentication invalid Testing");

  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnAuthenticatedError("Authentication invalid");
  }
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
