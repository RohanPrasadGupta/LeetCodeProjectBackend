const Data = require("../Models/dataModel");

exports.getAllData = async (req, res) => {
  try {
    const docs = await Data.find();

    if (!docs) throw new Error("No record Found");

    res.status(200).json({
      status: "success",
      result: docs.length,
      docs,
    });
  } catch (err) {
    res.status(404).json({
      status: "Failed",
      message: err.message,
    });
  }
};

exports.addData = async (req, res) => {
  try {
    console.log(req.body);
    const doc = await Data.create(req.body);

    if (!doc) {
      throw new Error("Enter All the data");
    }

    res.status(200).json({
      status: "success",
      doc,
    });
  } catch (err) {
    res.status(404).json({
      status: "Failed",
      message: err.message,
    });
  }
};
