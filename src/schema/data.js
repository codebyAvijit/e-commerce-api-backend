const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  category: {
    type: String,
  },
});

const Data = mongoose.model("Data", dataSchema);
module.exports = Data;
