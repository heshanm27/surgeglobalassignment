const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    id: { type: Number, required: true },
    firstName: { type: String },
    lastName: { type: String },
    email: {
      type: String,
      unique: true,
      required: [true, "Please insert a valid email address"],
    },
    dateOfBirth: { type: Date },
    mobile: { type: Number },
    status: { type: Boolean, default: false },
    password: { type: String, required: [true, "Please insert a password"] },
    accountType: { type: String, default: "user" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
