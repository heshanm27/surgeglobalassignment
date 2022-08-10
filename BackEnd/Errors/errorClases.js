const CustomAPIError = require("./customError");
const UnAuthenticatedError = require("./unAuthenticatedError");
const NotFoundError = require("./notFoundError");
const BadRequestError = require("./badRequestError");

//export all errors
module.exports = {
  CustomAPIError,
  UnAuthenticatedError,
  NotFoundError,
  BadRequestError,
};
