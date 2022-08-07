const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

//before saving document in mongodb this middleware will be hashed password and store the document in mongodb
UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model("User", UserSchema);
