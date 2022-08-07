import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./customError";

class UnAuthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.StatusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnAuthenticatedError;
