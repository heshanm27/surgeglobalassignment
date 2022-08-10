const connectDB = require("../DataBase/DataBaseConnetion");
const UserModel = require("../Models/UserModel");
require("dotenv").config();

//run using command node SeedFile/SeedAdmin.js

//if you need change the admin info then change the adminInfo object
//if you need hange admin info in frontend then change the adminInfo status to true
const adminInfo = {
  firstName: "Example",
  lastName: "Admin",
  email: "exampleAdmin@gmail.com",
  dateOfBirth: new Date(),
  mobile: 1234567890,
  status: false,
  password: "exampleAdmin",
  accountType: "admin",
};

async function addAdmin() {
  try {
    await connectDB(process.env.MONGO_URI);
    adminInfo.id = (await UserModel.gearateId()) + 1;
    const user = await UserModel.create(adminInfo);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}
addAdmin();
