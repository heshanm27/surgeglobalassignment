const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  id: { type: Number },
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  dateOfBirth: { type: Date },
  mobile: { type: Number },
  status: { type: Boolean, default: false },
  password: { type: String },
  accountType: { type: String },
});
