const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  Title: { type: String, required: [true, "Please Enter Title"], unique: true },
  Level: { type: String, required: [true, "Please Enter Level"] },
  Code: { type: String, required: [true, "Please Enter Code"] },
  Type: { type: String, required: [true, "Please Enter Type"] },
});

const Data = mongoose.model("data", dataSchema);

module.exports = Data;
