const express = require("express");

const dotenv = require('dotenv')
const app = express();
dotenv.config({ path: './config.env'})

const PORT = process.env.PORT

//database
require('../db/conn')
const User = require('../models/users')

// middleware
const mid = (req, res, next) => {
  console.log("middleware");
  next();
};

app.get("/", (req, res) => {
  res.send(`hello home`);
});
app.get("/about", mid, (req, res) => {
  res.send(`hello about`);
});
app.get("/contact", (req, res) => {
  res.send(`hello contact`);
});
app.get("/signIn", (req, res) => {
  res.send(`hello signIn`);
});
app.get("/signIn", (req, res) => {
  res.send(`hello signIn`);
});
app.get("/signUp", (req, res) => {
  res.send(`hello signUp`);
});

app.listen(PORT, () => console.log(`server is listening at ${PORT}`));
