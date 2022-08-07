//get CustomAPIError class module
const { CustomAPIError } = require("../Errors/customError");

/**
 * @description Errorhandleing Middleware function when error Occure if  error instance from CustomAPIError class
 *  send response with  error status and error message other whise send default error message
 * @returns  response with status code and error message
 */
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(500)
    .json({ msg: "Something went wrong, please try again" });
};

module.exports = errorHandlerMiddleware;
