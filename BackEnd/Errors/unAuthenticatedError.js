const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./customError");

class UnAuthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.StatusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnAuthenticatedError;
