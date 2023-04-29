const mongoose = require("mongoose");
// database
const db = process.env.DATABASE
mongoose
  .connect(db)
  .then(() => console.log(`successfully connected db`))
  .catch(() => console.log(`db not connected`));
