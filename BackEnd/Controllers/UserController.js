const { CustomAPIError } = require("../Errors/errorClases");
const userModel = require("../Models/UserModel");

/**
 *
 * @description search user by search query
 * and retun details of user according to page and limit query
 */
const getUsersDetails = async (req, res) => {
  const search = String(req.query.search);
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 5;
  const skip = (page - 1) * limit;

  //get count of all users
  let usersCount = await userModel.find({}).count();

  //get all users and search by name,email,id and sort according  createdat date and limit the result according to page and limit
  let users = await userModel
    .aggregate([
      {
        $match: {
          $or: [
            { firstName: { $regex: search, $options: "si" } },
            { lastName: { $regex: search, $options: "i" } },
            { email: { $regex: search, $options: "si" } },
            { id: Number(search) ? Number(search) : 0 },
          ],
        },
      },
    ])
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);
  console.log(users);
  usersCount = Math.ceil(usersCount / limit);
  res.status(200).json({ users, usersCount });
};

module.exports = {
  getUsersDetails,
};
