const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./customError");

//Extends CustomAPIError class and create a new class for UnAuthenticatedError
class UnAuthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}
module.exports = UnAuthenticatedError;
