const { CustomAPIError } = require("../Errors/errorClases");
const userModel = require("../Models/UserModel");

const getUsersDetails = async (req, res) => {
  const search = String(req.query.search);
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 5;
  const skip = (page - 1) * limit;
  let usersCount = await userModel.find({}).count();
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
