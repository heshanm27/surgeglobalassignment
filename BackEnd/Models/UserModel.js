const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    firstName: { type: String },
    lastName: { type: String },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: [true, "Enter an email"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
      ],
    },
    dateOfBirth: { type: Date },
    mobile: { type: Number },
    status: { type: Boolean, default: false },
    password: {
      type: String,
      required: [true, "Please insert a password"],
    },
    accountType: { type: String, default: "user" },
  },
  { timestamps: true }
);

//before saving document in mongodb this middleware will be hashed password and store the document in mongodb
UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.validatePassword = async function (enteredPassword) {
  const isValid = await bcrypt.compare(enteredPassword, this.password);
  return isValid;
};

UserSchema.statics.gearateId = async function () {
  return this.count();
};
module.exports = mongoose.model("User", UserSchema);
