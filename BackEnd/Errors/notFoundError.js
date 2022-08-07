import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./customError";

class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.StatusCode = StatusCodes.NOT_FOUND;
  }
}

module.exports = NotFoundError;
