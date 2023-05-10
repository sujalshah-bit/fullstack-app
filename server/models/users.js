const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  Phone: {
    type: Number,
    required: true,
  },
  Work: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  cPassword: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (this.isModified("Password")) {
    this.Password = await bcrypt.hash(this.Password, 12);
    this.cPassword = await bcrypt.hash(this.cPassword, 12);
  }
  next();
});

//generate Web Token
userSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign({__id:this.__id},process.env.SECERET_KEY);
    this.tokens = this.tokens.concat({token:token})
    await this.save()
    return token
  } catch (error) {
    console.log(error);
  }
};

const User = mongoose.model("USER", userSchema);
module.exports = User;
