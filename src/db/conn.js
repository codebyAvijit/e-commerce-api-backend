const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.mongoDbUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connection Successfull");
  })
  .catch(() => {
    console.log("Connection Terminated");
  });

module.exports = mongoose;
