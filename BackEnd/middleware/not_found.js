/**
 *@description  Work as middleware for the NotFound Route
 * @param {*} req
 * @param {*} res
 * @returns resposne status and message
 */
const notFound = (req, res) => {
  console.log(req.url);
  return res.status(404).send("Route does not exist");
};

module.exports = notFound;
