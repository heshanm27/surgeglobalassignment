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
    status: { type: Boolean, default: true },
    password: {
      type: String,
      required: [true, "Please insert a password"],
    },
    accountType: {
      type: String,
      default: "user",
      enum: { values: ["user", "admin"], message: "{VALUE} is not supported}" },
    },
  },
  { timestamps: true }
);

//before saving document in mongodb this middleware will be hashed password and store the document in mongodb
UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//bedfore findOneAndUpdate document in mongodb this middleware will be hashed password and store the document in mongodb
UserSchema.pre("findOneAndUpdate", async function (next) {
  let update = { ...this.getUpdate() };
  const salt = await bcrypt.genSalt(10);
  update.password = await bcrypt.hash(update.password, salt);
  this.setUpdate(update);
  next();
});

//compare hash password in database  with user provided password
UserSchema.methods.validatePassword = async function (enteredPassword) {
  const isValid = await bcrypt.compare(enteredPassword, this.password);
  return isValid;
};

//create token for user and pass user objectId ,accountType to Jwt token
UserSchema.methods.gearateJWTToken = function () {
  return jwt.sign(
    { id: this._id, accountType: this.accountType },
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
  );
};

//return currunt document count in user collection
UserSchema.statics.gearateId = async function () {
  return this.count();
};
module.exports = mongoose.model("User", UserSchema);
