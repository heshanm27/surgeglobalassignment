const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");

const authenticationAdmin = async (req, res, next) => {
  // check header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnauthenticatedError("Authentication invalid");
  }
  const token = authHeader.split(" ")[1];

  try {
    // verify the token
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    if (payload.accountType !== "admin") {
      throw new UnauthenticatedError("Authentication invalid");
    }

    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication invalid");
  }
};

module.exports = authenticationAdmin;
