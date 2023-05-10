const express = require("express");
const bcrypt = require("bcrypt");
const jwt  = require("jsonwebtoken")
require("mongoose");
require("../db/conn");
const User = require("../models/users");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello from the server");
});

router.post("/register", async (req, res) => {
  const { name, email, Phone, Work, Password, cPassword } = req.body;
  if (!name || !email || !Phone || !Work || !Password || !cPassword) {
    return res.status(422).json({ error: "Please Filed all the field" });
  }
  try {
    const userExits = await User.findOne({ email: email });
    if (userExits) {
      return res
        .status(422)
        .json({ error: "User Already Exist with this email id" });
    } else if (Password != cPassword) {
      return res
        .status(422)
        .json({ error: "password does  not match with confirm password" });
    } else {
      const user = new User({ name, email, Phone, Work, Password, cPassword });
      await user.save();
      res.status(201).json({ message: "User Registered Successfully" });
    }
  } catch (error) {
    console.log(err);
  }
});
//Promises way:
// router.post("/register", (req, res) => {
//   const { name, email, Phone, Work, Password, cPassword } = req.body;
//   if (!name || !email || !Phone || !Work || !Password || !cPassword) {
//       return res.status(422).json({ error: "Please Filed all the field" });
//     }
//   User.findOne({ email: email }).then((userExits) => {
//     if (userExits) {
//       return res
//         .status(422)
//         .json({ error: "User Already Exist with this email id" });
//     }
//     const user = new User({ name, email, Phone, Work, Password, cPassword });

//     user
//       .save()
//       .then(() => {
//         res.status(201).json({ message: "User Registered Successfully" });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   });
// });

//login Route
router.post("/login", async (req, res) => {
  const { email, Password } = req.body;
  try {
    if (!email || !Password) {
      return res.status(422).json({ error: "Please Filed all the field" });
    }
    const emailExist = await User.findOne({ email: email });
    // console.log(emailExist);
    if (emailExist) {
      const isMatch = await bcrypt.compare(Password, emailExist.Password);
      const token = await emailExist.generateAuthToken()
      res.cookie("jwtToken",token,{
        expires:new Date(Date.now() + 25892000000),
        httpOnly:true
      })
      if (!isMatch) {
        res.status(422).json({ error: "Invalid credentials" });
      } else {
        res.status(201).json({ message: "User reg successfully" });
      }
    } else {
      res.status(422).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
