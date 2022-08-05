/**
 * @description CutomeError Class With Extends from default Error Class
 */
class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}
/**
 * @param {String} msg
 * @param {Number} statusCode
 * @description create new CustomAPIError Class instance
 */
const createCustomError = (msg, statusCode) => {
  return new CustomAPIError(msg, statusCode);
};

module.exports = { createCustomError, CustomAPIError };
