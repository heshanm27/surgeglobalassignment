/**
 * @description CutomeError Class With Extends from default Error Class
 */
class CustomAPIError extends Error {
  constructor(message) {
    super(message);
  }
}

module.exports = CustomAPIError;
